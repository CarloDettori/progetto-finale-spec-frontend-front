import { NavLink } from "react-router-dom"
export default function HomePage() {

    return (
        <>
            <div className="max-w-300 mx-auto">
                <div className="flex flex-col gap-3 text-center py-15" >
                    <h2 id="benvenuto"><strong>Benvenuto nella tua</strong></h2>
                    <h1 id="gamingzone"> <strong>GAMING ZONE!</strong></h1>
                    <h4 className="text-3xl py-10"><strong>Scopri i segreti dei tuoi Videogiochi preferiti,  confrontali e salvali nella tua wish list!</strong></h4>
                </div >
            </div>
            <nav className="flex justify-evenly pb-10">

                <NavLink className="home-link" to="/games"><strong>LISTA<br />GIOCHI</strong></NavLink>

                <NavLink className="home-link" to="/compare"><strong>CONFRONTA<br />GIOCHI</strong></NavLink>

                <NavLink className="home-link" to="/wish"><strong>LISTA<br />DESIDERI</strong></NavLink>

            </nav>
        </>
    )
}
