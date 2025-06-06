import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";


export default function DefaultLayout() {
    return (<>
        <Header />
        <main className="p-12.5 min-h-screen bg-[#1a5ac92a]">

            <Outlet />

        </main>
        <Footer />
    </>)
}