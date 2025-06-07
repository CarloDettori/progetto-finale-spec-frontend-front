import { NavLink, Link } from "react-router-dom";
import pad from "../../assets/favicon.jpg"


export default function Header() {


    return (
        <header className="flex h-23 p-2.5 shadow-(--custom-shadow) z-100 fixed w-full bg-white">
            <Link to="/">
                <img className="h-full p-2.5" src={pad} alt="padIMG" />
            </Link>
            <nav className="flex pl-8 gap-10 text-gray-600 text-xl">


                <NavLink className="navlink" to="/games"><strong>videogiochi</strong></NavLink>

                <NavLink className="navlink" to="/compare"><strong >confronta</strong></NavLink>

                <NavLink className="navlink" to="/wish"><strong>wishlist</strong></NavLink>

            </nav>

        </header >
    )
}