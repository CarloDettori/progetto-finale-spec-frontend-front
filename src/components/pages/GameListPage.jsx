import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import GameCardComponent from "../common/GameCardComponent"
export default function GameListPage() {
    const { data } = useContext(GlobalContext)
    console.log(data)
    return (
        <section>
            <h1>Lista Giochi</h1>
            <div>
                {
                    data.map((game) => {
                        <GameCardComponent key={game.id} title={game.title} category={game.category} />
                    })
                }
            </div>
        </section>
    )
}

