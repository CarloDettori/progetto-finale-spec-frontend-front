import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import GameCardComponent from "../common/GameCardComponent"
export default function GameListPage() {

    const { games } = useContext(GlobalContext)
    console.log(games)

    return (
        <>
            <h1 className="pb-7.5">Lista Giochi</h1>
            <div className="flex flex-col gap-4 flex-wrap">
                {
                    games.map((game) => {
                        return <GameCardComponent key={game.id} title={game.title} category={game.category} />
                    })
                }
            </div>
        </>
    )
}

