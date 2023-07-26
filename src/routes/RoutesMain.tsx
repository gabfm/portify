import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Portfolio from "../pages/Portfolio";
import PortfolioProvider from "../providers/PortfolioContext/PortfolioContext";
import { ProjectProvider } from "../providers/ProjectContext/ProjectContext";
import ProtectedRoutes from "../components/ProtectedRoutes";
import PublicRoutes from "../components/PublicRoutes";


function RoutesMain() {
    

    return (
            <Routes>
                <Route element={<PublicRoutes />}>
                    <Route path="/" element={<Home/>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Route>

                <Route element={<ProtectedRoutes />}>
                    <Route path="/dashboard" element={<PortfolioProvider><ProjectProvider><Dashboard /></ProjectProvider></PortfolioProvider>} />
                </Route>

                <Route path="/portfolio/:id" element={<ProjectProvider><PortfolioProvider><Portfolio /></PortfolioProvider></ProjectProvider>} />
            </Routes>
    )
}

export default RoutesMain;