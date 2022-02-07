import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from '../layouts/App'
import { Home } from "../pages";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}