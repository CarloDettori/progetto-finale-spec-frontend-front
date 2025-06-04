import { useState, useMemo, useEffect, useCallback } from "react"
import GameCardComponent from "./GameCardComponent";



export default function GameFilterComponent({ games }) {


    const [searchQuery, setSearchQuery] = useState("");
    const [selectValue, setSelectValue] = useState("");
    const [categories, setCategories] = useState([]);




    function debounce(callback, delay) {
        let timer;

        return (value) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                callback(value)
            }, delay)
        }
    }

    const handleFilter = debounce((event) => {
        const { value, type } = event.target;
        if (type === "text") {
            setSearchQuery(value)
        } else {
            setSelectValue(value)
        }

    }, 400)


    const filteredGames = useMemo(() => {

        if (!games) return [];


        let filtered = [...games];

        if (selectValue.trim() !== "" && selectValue.trim() !== "-") {
            filtered = filtered.filter(game =>
                game.category.toLowerCase().includes(selectValue.trim().toLowerCase())
            );
        }

        if (searchQuery.trim() !== "") {
            filtered = filtered.filter(game =>
                game.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
            );
        }

        return filtered;

    }, [games, searchQuery, selectValue]);

    useEffect(() => {
        const uniqueCategories = [];
        filteredGames?.forEach(game => {
            if (!uniqueCategories.includes(game.category)) {
                uniqueCategories.push(game.category);
            }
        });
        setCategories(uniqueCategories);
    }, [searchQuery, games])

    return (<>

        <div className="grid gap-6 mb-6 md:grid-cols-2">

            <div className="pb-10 ">

                <label htmlFor="small-input" className="block mb-2 font-normal text-gray-700 dark:text-gray-600">Cerca un gioco</label>

                <input type="text" id="small-input" className="block w-full p-2 text-gray-900 shadow-md rounded-lg bg-white text-xs focus:ring-grey-100" placeholder="Super Mario" onChange={handleFilter} />
            </div >

            <div className="pb-10">
                <label htmlFor="countries" className="block mb-2 font-normal text-gray-700 dark:text-gray-600">Filtra per categoria</label>
                <select id="countries" type="select" className="block w-full p-2 text-gray-900 shadow-md rounded-lg bg-white text-xs" placeholder="Sparatutto" onChange={handleFilter}>

                    <option defaultValue>-</option>
                    {categories?.map((category, index) => <option key={index + 1} value={category} >{category}</option>)}

                </select>
            </div>
        </div >
        <div className="flex flex-col gap-4 flex-wrap">
            {filteredGames ? filteredGames?.map((game) => <GameCardComponent key={game.id} title={game.title} category={game.category} />) : <p>nessun gioco trovato</p>
            }
        </div>



    </>)
}