import useWish from "../../hooks/useWish.jsx"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext.jsx"
import { memo } from "react"

function GameCardComponent({ id, title, category }) {
    const { games, wishGames } = useContext(GlobalContext)
    const game = games.find(game => game.id === id)

    const [addWish, delteWish] = useWish()

    return (
        <div className="flex justify-between bg-[#4a5566] text-white p-7 px-8 rounded-xl shadow-xl">
            <div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight  wrap">{title}</h2>
                <h4 className="font-normal  ">{category}</h4>
            </div>

            {wishGames?.some(game => game.title === title) ?
                <button onClick={e => { e.stopPropagation(); delteWish(title) }}><i className="fa-solid hover:pointer hover:scale-130 fa-solid fa-xmark cursor-pointer text-hite)"></i></button> :
                <button onClick={(e) => { e.stopPropagation(); addWish(game) }}><i className=" hover:pointer hover:scale-130 fa-solid fa-plus cursor-pointer text-white"></i></button>}
        </div>
    )
}

export default memo(GameCardComponent);