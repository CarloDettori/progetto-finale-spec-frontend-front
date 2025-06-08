
import { useContext, useState, useRef } from "react"
import { GlobalContext } from "../context/GlobalContext"
import GameDetailComponent from "../common/GameDetailcomponent"
import GameFilterComponent from "../common/GameFilterComponent"
export default function ComparisonPage() {

    const { games } = useContext(GlobalContext)
    const [selectedGameId1, setSelectedGameId1] = useState(null)
    const [selectedGameId2, setSelectedGameId2] = useState(null)
    const detailRef1 = useRef(null);
    const detailRef2 = useRef(null);

    const handleSelectGame1 = (id) => {
        setSelectedGameId1(id);
        setTimeout(() => {
            detailRef1.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    const handleSelectGame2 = (id) => {
        setSelectedGameId2(id);
        setTimeout(() => {
            detailRef2.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };


    return (<>

        <h1 className="pb-10 text-4xl text-gray-500 arcadefont"><strong>Confronta due Videogiochi</strong></h1>

        <div className="flex justify-between  items-end">
            <h1 className="text-center text-3xl pb-4 w-max arcadefont"><strong>Videogioco 1</strong></h1>
            <h1 className="text-center text-8xl  arcadefont"><strong>VS</strong></h1>
            <h1 className="text-center text-3xl pb-4 w-max arcadefont"><strong>Videogioco 2</strong></h1>
        </div>

        <div className="flex mx-auto justify-evenly">

            <div className="comparison-deck pe-12.5 mt-5 pb-40">
                {selectedGameId1
                    ? <div ref={detailRef1} >
                        <GameDetailComponent id={selectedGameId1} onBack={() => setSelectedGameId1(null)} />
                    </div>
                    : null
                }
                <GameFilterComponent games={games} onSelectGame={handleSelectGame1} />
            </div>

            <div className="flex flex-col items-center">

                <div className=" bg-[#4a5566] h-full w-1.5 p-0"></div>
            </div>

            <div className="comparison-deck ps-12.5 mt-5 pb-10">
                {selectedGameId2
                    ? <div ref={detailRef2} >
                        <GameDetailComponent id={selectedGameId2} onBack={() => setSelectedGameId2(null)} />
                    </div>
                    : null
                }
                <GameFilterComponent games={games} onSelectGame={handleSelectGame2} />
            </div>

        </div>

    </>)
}