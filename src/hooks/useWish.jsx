import { useContext } from "react"
import { GlobalContext } from "../components/context/GlobalContext.jsx"
import { useNavigate } from "react-router-dom"



export default function useWish() {

    const { wishGame, setWishGames } = useContext(GlobalContext)
    const navigate = useNavigate()

    const addWish = (wishedGame) => {
        setWishGames(prev => [...prev, wishedGame])
        navigate("/wish")
    }


    const delteWish = (id) => {
        setWishGames(wishGame?.filter((game) => { game.id = id }))
        navigate("/wish")
    }

    return [addWish, delteWish]
}