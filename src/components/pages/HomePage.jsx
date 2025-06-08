import { NavLink } from "react-router-dom"
export default function HomePage() {

    return (
        <section className="section">

            <div className="flex flex-col gap-3 text-center pb-15 max-w-300 mx-auto arcadefont" >
                <h2 id="benvenuto" className="text-gray-600"><strong>Benvenuto nella tua</strong></h2>
                <h1 id="gamingzone" className="text-gray-600"> <strong>GAMINGZONE</strong></h1>
                <h4 className="text-3xl py-10 text-gray-600"><strong>Scopri i segreti dei tuoi Videogiochi preferiti, <br />  confrontali e salvali nella tua wishlist!</strong></h4>
            </div >

            <nav className="flex justify-center gap-10 pb-10">

                <NavLink className="home-link" to="/games"><strong>LISTA<br />GIOCHI</strong></NavLink>

                <NavLink className="home-link" to="/compare"><strong>CONFRONTA<br />GIOCHI</strong></NavLink>

                <NavLink className="home-link" to="/wish"><strong>LISTA<br />DESIDERI</strong></NavLink>

            </nav>
        </section>
    )
}
