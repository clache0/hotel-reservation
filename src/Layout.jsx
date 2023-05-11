import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";

export default function Layout() {
    return (
        <>
            <Header />

            <Outlet />

            <Footer />
        </>
    )
}
