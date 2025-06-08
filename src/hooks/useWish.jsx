import { useContext } from "react"
import { GlobalContext } from "../components/context/GlobalContext.jsx"




export default function useWish() {

    const { wishGames, setWishGames } = useContext(GlobalContext)


    const addWish = (wishedGame) => {
        setWishGames(prev => [...prev, wishedGame])
    }


    const delteWish = (title) => {
        setWishGames(wishGames?.filter((game) => game.title !== title))
    }

    return [addWish, delteWish]
}