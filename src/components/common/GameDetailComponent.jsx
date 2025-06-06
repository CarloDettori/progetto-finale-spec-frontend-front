import { useState, useEffect } from "react"


import gotyLogo from "../../assets/GOTY.png"

export default function GameDetailComponent({ id, onBack }) {



    const [gameDetails, setGameDetails] = useState({})

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
        <button className=" h-10 px-6 mb-7 py-2 bg-white shadow-xl rounded-4xl" onClick={onBack}>Chiudi</button>
        <div className="bg-white rounded-3xl p-10 shadow-xl mb-30">

            <div className="flex items-center justify-between h-30 gap-10 pb-10">

                <div className="flex flex-col gap-1">
                    <h1 className="text-5xl"><strong>{gameDetails.title}</strong></h1><p className="text-3xl">{gameDetails.category}</p>
                </div>

                {gameDetails.goty === true ? <img className="h-full" src={gotyLogo} alt="GOTY-img" /> : ""}

            </div>

            <div className="flex">

                {gameDetails.img ? <img className="pe-10" src={gameDetails.img} alt="" /> : null}

                <div id="info"
                    className={
                        "flex flex-col items-start " +
                        (gameDetails.img ? "" : "w-full")
                    }
                    style={gameDetails.img ? {} : { marginLeft: 0 }}
                >

                    <div className="flex flex-col pb-6 gap-1 border-b">

                        <p className="text-3xl" ><strong>Descrizione:</strong></p>
                        <p className="text-2xl">{gameDetails.description}</p>

                    </div>
                    <div className="flex items-end w-full h-full justify-between">
                        <div className="flex flex-col pt-6 w-full h-full justify-between">

                            <p><strong>Data di uscita: </strong><span>{gameDetails.releaseDate}</span></p>
                            <div className="flex"><p><strong>Genere: </strong></p><p className="mx-1">{gameDetails.genere?.map((genere, index) => <span className="mx-1" key={index}>{genere}</span>)}</p>
                            </div>
                            <p><strong>Dimensioni: </strong><span>
                                {typeof gameDetails.weightMB === "number" && !isNaN(gameDetails.weightMB)
                                    ? (gameDetails.weightMB / 1000).toFixed(2)
                                    : "--"}
                            </span> GB</p>
                            <p><strong>Prezzo: </strong><span>{gameDetails.price}</span> €</p>
                            <p><strong>Valutazione: </strong><span>{gameDetails.score} / 100</span></p>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    </>
    )
}