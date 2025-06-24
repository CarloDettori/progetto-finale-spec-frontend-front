import { createContext, useState, useEffect } from "react"
const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
    const [games, setGames] = useState([])
    const [wishGames, setWishGames] = useState(() => {
        const saved = localStorage.getItem("wishGames");
        return saved ? JSON.parse(saved) : [];
    });

    async function fetchData(url) {
        const response = await fetch(url)
        const dati = await response.json()
        return dati
    }

    useEffect(() => {
        fetchData("/database/games.json")
            .then(obj => setGames(obj))
            .catch(error => console.error(error))
            .finally(console.log("fetch end"))
    }, [])


    useEffect(() => {
        localStorage.setItem("wishGames", JSON.stringify(wishGames));
    }, [wishGames]);

    return (
        <GlobalContext.Provider value={{ games, setGames, wishGames, setWishGames }}>
            {children}
        </GlobalContext.Provider>
    )
};

export { GlobalContext, GlobalProvider }