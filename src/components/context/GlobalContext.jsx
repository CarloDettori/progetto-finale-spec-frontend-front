import { createContext, useState, useEffect } from "react"
const GlobalContext = createContext()



const GlobalProvider = ({ children }) => {
    const [data, setData] = useState([])

    async function fetchData(url) {
        const response = await fetch(url)
        const dati = response.json()
        return dati
    }




    useEffect(() => {
        fetchData("http://localhost:3001/games")
            .then(obj => setData(obj))
            .catch(error => console.error(error))
            .finally(console.log("fetch end"))
    }, [])

    return (
        <GlobalContext.Provider value={{ data, setData }}>
            {children}
        </GlobalContext.Provider>)
};

export { GlobalContext, GlobalProvider }