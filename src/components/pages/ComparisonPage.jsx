
import { useContext, useState, useMemo, useCallback } from "react"
import GameFilterComponent from "../common/GameFilterComponent"
import { GlobalContext } from "../context/GlobalContext"
export default function ComparisonPage() {



    const { games } = useContext(GlobalContext)

    return (<>
        <h1 className="pb-7.5 text-4xl"><strong>Confronta due Giochi</strong></h1>
        <h1 className="text-center text-6xl pb-5"><strong>VS</strong></h1>
        <div className="flex mx-auto justify-evenly">

            <div className="pe-12.5">

                <GameFilterComponent games={games} />

            </div>

            <div className="flex flex-col items-center">

                <div className="border-2 h-full w-0.5 p-0"></div>
            </div>

            <div className="ps-12.5">

                <GameFilterComponent games={games} />

            </div>

        </div>

    </>)
}