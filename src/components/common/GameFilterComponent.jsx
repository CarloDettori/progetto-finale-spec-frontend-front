import { useState, useMemo, useCallback } from "react"
import GameCardComponent from "./GameCardComponent";



export default function GameFilterComponent({ games }) {


    const [searchQuery, setSearchQuery] = useState("");
    const [selectValue, setSelectValue] = useState("");

    function debounce(callback, delay) {
        let timer;

        return (value) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                callback(value)
            }, delay)
        }
    }

    const handleSearch = debounce((event) => {
        const value = event.target.value;
        setSearchQuery(value)
    }, 400)


    const filteredGames = useMemo(() => {

        if (!games) return [];


        let filtered = [...games];

        if (searchQuery.trim() !== "") {
            filtered = filtered.filter(task =>
                task.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
            );
        }

        if (selectValue.trim() !== "") {
            filtered = filtered.filter(task =>
                task.category.toLowerCase().includes(selectValue.trim().toLowerCase())
            );
        }

        return filtered;

    }, [games, searchQuery]);

    return (<>

        <div className="grid gap-6 mb-6 md:grid-cols-2">

            <div className="pb-10 ">

                <label htmlFor="small-input" className="block mb-2 font-normal text-gray-700 dark:text-gray-600 " onChange={handleSearch}>Cerca un gioco</label>

                <input type="text" id="small-input" className="block w-full p-2 text-gray-900 shadow-md rounded-lg bg-white text-xs focus:ring-grey-100" placeholder="Super Mario" />
            </div >

            <div className="pb-10">
                <label htmlFor="countries" className="block mb-2 font-normal text-gray-700 dark:text-gray-600">Filtra per categoria</label>
                <select id="countries" className="block w-full p-2 text-gray-900 shadow-md rounded-lg bg-white text-xs" placeholder="Sparatutto" onChange={handleSearch}>
                    <option defaultValue>-</option>

                    {filteredGames.map(game => <option key={game.id} value={game.category} >{game.category}</option>)}
                </select>
            </div>
        </div >
        <div className="flex flex-col gap-4 flex-wrap">
            {
                filteredGames.map((game) => {
                    return <GameCardComponent key={game.id} title={game.title} category={game.category} />
                })
            }
        </div>



    </>)
}