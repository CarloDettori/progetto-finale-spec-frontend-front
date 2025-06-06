import { createContext, useState, useEffect } from "react"
const GlobalContext = createContext()



const GlobalProvider = ({ children }) => {
    const [games, setGames] = useState([])
    const [wishGames, setWishGames] = useState([])

    async function fetchData(url) {
        const response = await fetch(url)
        const dati = response.json()
        return dati
    }




    useEffect(() => {
        fetchData("http://localhost:3001/games")
            .then(obj => setGames(obj))
            .catch(error => console.error(error))
            .finally(console.log("fetch end"))
    }, [])

    return (
        <GlobalContext.Provider value={{ games, setGames, wishGames, setWishGames }}>
            {children}
        </GlobalContext.Provider>)
};

export { GlobalContext, GlobalProvider }