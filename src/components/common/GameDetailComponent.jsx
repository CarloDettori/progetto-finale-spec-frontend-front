import { useState, useEffect } from "react"
import useWish from "../../hooks/useWish.jsx"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext.jsx"

import gotyLogo from "../../assets/GOTY.png"

export default function GameDetailComponent({ id, onBack }) {

    const { games, wishGames } = useContext(GlobalContext)
    const focusedGame = games.find(game => game.id === id)
    const [gameDetails, setGameDetails] = useState({})

    const [addWish, delteWish] = useWish()

    async function fetchData(url) {
        const response = await fetch(url)
        const dati = await response.json()
        return dati
    }

    useEffect(() => {
        if (!id) return;
        fetchData("http://localhost:3001/games/" + id)
            .then(dati => setGameDetails(dati.game))
            .catch(error => console.error("errore durante la raccolta dati:" + error))
    }, [id])

    return (<>
        <div className="flex justify-between">
            <button className="h-10 px-6 mb-7 py-2 bg-[#4a5566] shadow-xl hover:cursor-pointer rounded-4xl arcadefont-inverted" onClick={onBack}><strong>Chiudi</strong></button>
            {wishGames?.some(game => game.title === focusedGame.title) ?
                <button className="h-10 px-6 mb-7 py-2 shadow-xl hover:cursor-pointer rounded-4xl arcadefont-inverted bg-[#4a5566]" onClick={e => { e.stopPropagation(); delteWish(focusedGame.title) }}><strong> rimuovi dalla wishlisti</strong></button> :
                <button className="h-10 px-6 mb-7 py-2 shadow-xl hover:cursor-pointer rounded-4xl arcadefont-inverted bg-[#4a5566]" onClick={() => addWish(focusedGame)}><strong>aggiungi alla wishlist</strong></button>}
        </div>
        <div id="detail-card" className="bg-[#4a5566] rounded-3xl p-10 shadow-xl mb-30 text-white">

            <div id="goty-logo" className="items-start w-8 h-auto item">
                {gameDetails.goty === true ? <img src={gotyLogo} alt="GOTY-img" /> : ""}
            </div>


            <strong className="text-5xl block pb-5">{gameDetails.title}</strong>
            <p className="text-3xl block">{gameDetails.category}</p>




            <div className="flex flex-wrap">

                <img
                    className="me-10 mt-10 rounded-lg"
                    src={gameDetails.img || "https://placehold.co/250x300"}
                    alt={gameDetails.title || "img"}
                    onError={e => { e.target.src = "https://placehold.co/250x300"; }}
                />

                <div className={"flex flex-col items-start  mt-10"} style={gameDetails.img ? {} : { marginLeft: 0 }}>

                    <div className="flex flex-col w-full border-b pb-5 gap-1">

                        <p className="text-3xl" ><strong>Descrizione:</strong></p>
                        <p className="text-2xl">{gameDetails.description}</p>

                    </div>

                    <div className="flex flex-col pt-5 w-full h-full justify-between">

                        <p><strong>Data di uscita: </strong><span>{gameDetails.releaseDate}</span></p>
                        <div className="flex"><p><strong>Genere: </strong></p><p className="mx-1">{gameDetails.genere?.map((genere, index) => <span className="mx-1" key={index}>{genere}</span>)}</p>
                        </div>
                        <p><strong>Dimensioni: </strong><span>
                            {typeof gameDetails.weightMB === "number" && !isNaN(gameDetails.weightMB)
                                ? (gameDetails.weightMB / 1000).toFixed()
                                : "--"}
                        </span> GB</p>
                        <p><strong>Prezzo: </strong><span>{gameDetails.price}</span> €</p>
                        <p><strong>Valutazione: </strong><span>{gameDetails.score} / 100</span></p>

                    </div>


                </div>

            </div>

        </div>
    </>
    )
}