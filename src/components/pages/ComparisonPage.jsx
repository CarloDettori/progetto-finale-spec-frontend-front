
import { useContext, useState, useRef } from "react"
import { GlobalContext } from "../context/GlobalContext"
import GameDetailComponent from "../common/GameDetailcomponent"
import GameFilterComponent from "../common/GameFilterComponent"
export default function ComparisonPage() {

    const { games } = useContext(GlobalContext)
    const [selectedGameId1, setSelectedGameId1] = useState(null)
    const [selectedGameId2, setSelectedGameId2] = useState(null)
    const detailRef = useRef(null);

    const handleSelectGame1 = (id) => {
        setSelectedGameId1(id);
        setTimeout(() => {
            detailRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    const handleSelectGame2 = (id) => {
        setSelectedGameId2(id);
        setTimeout(() => {
            detailRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };


    return (<>

        <h1 className="pb-7.5 text-4xl"><strong>Confronta due Giochi</strong></h1>

        <h1 className="text-center text-6xl pb-5"><strong>VS</strong></h1>

        <div className="flex mx-auto justify-evenly">

            <div className="pe-12.5">
                {selectedGameId1
                    ? <div ref={detailRef}>
                        <GameDetailComponent id={selectedGameId1} onBack={() => setSelectedGameId1(null)} />
                    </div>
                    : null
                }
                <GameFilterComponent games={games} onSelectGame={handleSelectGame1} />
            </div>

            <div className="flex flex-col items-center">

                <div className="border-2 h-full w-0.5 p-0"></div>
            </div>

            <div className="ps-12.5">
                {selectedGameId2
                    ? <div ref={detailRef}>
                        <GameDetailComponent id={selectedGameId2} onBack={() => setSelectedGameId2(null)} />
                    </div>
                    : null
                }
                <GameFilterComponent games={games} onSelectGame={handleSelectGame2} />
            </div>

        </div>

    </>)
}