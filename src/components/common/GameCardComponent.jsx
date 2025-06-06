import useWish from "../../hooks/useWish.jsx"
import { useContext, useParams } from "react"
import { GlobalContext } from "../context/GlobalContext.jsx"

export default function GameCardComponent({ id, title, category }) {

    const { wishGames } = useContext(GlobalContext)

    const [addWish, delteWish] = useWish()

    return (
        <div className=" flex justify-between bg-white p-7 px-8 rounded-xl shadow-xl">
            <div>
                <h2 className="mb-2 min-w-115 text-2xl font-bold tracking-tight text-gray-900 e">{title}</h2>
                <h4 className="font-normal text-gray-700 dark:text-gray-600">{category}</h4>
            </div>

            {wishGames?.some(game => game.title === title) ?
                <button onClick={() => delteWish(id)}><i className="fa-solid hover:pointer hover:scale-110 fa-solid fa-square-xmark cursor-pointer"></i></button> :
                <button onClick={() => addWish(wishGames)}><i className="text-3xl hover:pointer hover:scale-130 fa-solid fa-square-plus cursor-pointer"></i></button>}


        </div>


    )
}