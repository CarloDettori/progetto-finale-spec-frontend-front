import { useContext, useState, useRef } from "react"
import { GlobalContext } from "../context/GlobalContext"
import GameFilterComponent from "../common/GameFilterComponent"
import GameDetailComponent from "../common/GameDetailcomponent"

export default function WishlistPage() {

    const { wishGames } = useContext(GlobalContext)

    return (
        <section className="section">

            <h1 className="pb-7.5 text-4xl pb-15 arcadefont"><strong>wishlist</strong></h1>
            <GameFilterComponent games={wishGames} />

        </section>
    )
}