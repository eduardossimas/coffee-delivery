import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Sucess } from "./pages/Sucess";
import { DefaultLayout } from "./layout/DefaultLayout";

export function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<DefaultLayout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/sucess" element={<Sucess />} />
                </Route>
            </Routes>
        </div>
    )
}