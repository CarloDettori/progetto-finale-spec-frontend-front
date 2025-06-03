import { NavLink } from "react-router-dom";
import pad from "../../assets/favicon.webp"


export default function Header() {


    return (
        <header className="flex">
            <img id="logo" src={pad} alt="padIMG" />

            <nav className="flex">


                <NavLink className="nav-link button" to="/games">Lista Giochi</NavLink>



            </nav>

        </header >
    )
}