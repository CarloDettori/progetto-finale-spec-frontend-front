import { NavLink, Link } from "react-router-dom";
import pad from "../../assets/favicon.webp"


export default function Header() {


    return (
        <header className="flex h-23 p-2.5 shadow-(--custom-shadow)">
            <Link to="/">
                <img className="h-full p-2.5" src={pad} alt="padIMG" />
            </Link>
            <nav className="flex pl-8 gap-10">


                <NavLink className="flex items-center hover:scale-110" to="/games">Videogiochi</NavLink>

                <NavLink className="flex items-center hover:scale-110" to="/compare">Confronta</NavLink>

                <NavLink className="flex items-center hover:scale-110" to="/wish">Lista Desideri</NavLink>

            </nav>

        </header >
    )
}