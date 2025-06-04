import { useContext, useState, useMemo, useCallback } from "react"
import { GlobalContext } from "../context/GlobalContext"
import GameFilterComponent from "../common/GameFilterComponent"
export default function GameListPage() {

    const { games } = useContext(GlobalContext)


    return (
        <>
            <h1 className="pb-7.5 text-4xl"><strong>Lista Giochi</strong></h1>

            <GameFilterComponent games={games} />

        </>
    )
}

