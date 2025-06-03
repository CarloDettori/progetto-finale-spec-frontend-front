import { Outlet } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/Footer";


export default function DefaultLayout() {
    return (<>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>)
}