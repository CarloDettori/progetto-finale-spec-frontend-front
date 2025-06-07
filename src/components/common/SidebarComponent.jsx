import { useContext, useState, useMemo } from "react"
import { GlobalContext } from "../context/GlobalContext"
import useWish from "../../hooks/useWish";

export default function SidebarComponent() {

    const { wishGames } = useContext(GlobalContext)

    const [addWish, delteWish] = useWish();

    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState(1);

    const handleSort = (column) => {
        if (sortBy === column) {
            setSortOrder((prev) => prev * -1);
        } else {
            setSortBy(column);
            setSortOrder(1);
        }
    };


    const filteredGames = useMemo(() => {

        if (!wishGames) return [];

        let filtered = wishGames;



        const gameCopy = [...filtered];

        gameCopy.sort((a, b) => {

            let result = 0;

            if (sortBy === "title") {
                result = a.title.localeCompare(b.title)

            }
            //console.log(result)
            return result * sortOrder;
        });

        return gameCopy;

    }, [wishGames, sortBy, sortOrder,]);











    return (
        <div className="sidebar overflow-y-scroll">
            {filteredGames.length > 0 ? (
                <div className="p-5 z-50">

                    <div className="pb-3">

                        <h1 className="arcadefont-inverted pb-5"><strong>wishlist</strong></h1>

                        <p className="flex justify-between">
                            <strong className="text-start arcadefont-inverted" style={{ cursor: "pointer" }} onClick={() => handleSort("title")}>
                                TITOLO {sortBy === "title" ? (sortOrder === 1 ? "▲" : "▼") : ""}
                            </strong>
                        </p>

                    </div>

                    <div className="flex flex-col gap-4 flex-wrap">

                        {filteredGames.map((game) =>
                            <div key={game.id} className="flex justify-between bg-white p-3 rounded-xl shadow-xl">
                                <div>
                                    <h2 className="font-bold tracking-tight text-gray-600 wrap">{game.title}</h2>
                                </div>

                                <button className="flex items-center"
                                    onClick={e => {
                                        e.stopPropagation();
                                        delteWish(game.title);
                                    }}
                                >
                                    <i className="text-lg fa-solid hover:pointer hover:scale-130 fa-square-xmark text-[#4a5566]"></i>
                                </button>

                            </div>
                        )}

                    </div>

                </div>
            ) : (
                <div className="border sidebar p-5 arcadefont">
                    <p className="arcadefont-inverted text-gray-300"><strong>wishlist vuota</strong></p>
                </div>
            )}
        </div>
    )
}