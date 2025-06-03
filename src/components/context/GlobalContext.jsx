import { createContext, useState, useEffect } from "react"
const GlobalContext = createContext()



export default function GlobalProvider({ children }) {
    const [data, setData] = useState([])

    // fetch

    useEffect(() => { }, [])

    return (<GlobalContext.Provider value={{ data, setData }}>
        {children}
    </GlobalContext.Provider>)
};