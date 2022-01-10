import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/HeroesApp/" element={<LoginScreen />} />
                <Route path="/*" element={ <DashBoardRoutes /> } />
            </Routes>
        </BrowserRouter>
    )
}
