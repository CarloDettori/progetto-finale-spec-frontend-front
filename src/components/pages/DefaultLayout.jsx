import { Outlet, useLocation } from "react-router-dom";
import Header from "../layout/Header";
import SidebarComponent from "../common/SidebarComponent";
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext.jsx"

export default function DefaultLayout() {
    const { wishGames } = useContext(GlobalContext)
    const location = useLocation();

    // Nascondi la sidebar solo nella pagina /wish
    const hideSidebar = location.pathname === "/wish";

    return (
        <>
            <Header />
            <main className="flex pt-23 p-0 z-99 overflowx-scroll">
                {!hideSidebar && <SidebarComponent />}
                <section id="content" className=" overflow-y-scroll  w-full bg-[#d7e3f5]">
                    <Outlet />
                </section>
            </main>
        </>
    )
}