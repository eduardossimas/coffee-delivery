import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
    return (
        <div className="bg-background min-h-screen">
            <div className="container mx-auto px-5">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}