import { NavLink } from "react-router-dom";
import pad from "../../assets/favicon.webp"


export default function Header() {


    return (
        <header className="flex h-23 p-2.5 shadow-(--custom-shadow)">
            <img className="h-full p-2.5" src={pad} alt="padIMG" />

            <nav className="flex">


                <NavLink className="flex mx-2.5 items-center hover:scale-120" to="/games">Lista Giochi</NavLink>



            </nav>

        </header >
    )
}