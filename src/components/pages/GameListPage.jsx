import { useContext, useState, useRef } from "react"
import { GlobalContext } from "../context/GlobalContext"
import GameFilterComponent from "../common/GameFilterComponent"
import GameDetailComponent from "../common/GameDetailcomponent"
export default function GameListPage() {

    const { games } = useContext(GlobalContext)
    const [selectedGameId, setSelectedGameId] = useState(null)
    const detailRef = useRef(null);

    const handleSelectGame = useCallback((id) => {
        setSelectedGameId(id);
        setTimeout(() => {
            detailRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }, []);

    return (
        <section className="section">
            {selectedGameId
                ? <div ref={detailRef}>
                    <GameDetailComponent id={selectedGameId} onBack={() => setSelectedGameId(null)} />
                </div>
                : null
            }
            <h1 className="pb-7.5 text-4xl pb-15 arcadefont"><strong>Videogiochi</strong></h1>
            <GameFilterComponent games={games} onSelectGame={handleSelectGame} />

        </section>
    )
}

