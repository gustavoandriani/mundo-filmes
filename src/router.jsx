import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout"
import Home from "./pages/Home";
import Series from "./pages/Series";
import Filmes from "./pages/Filmes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{
            index: true,
            element: <Home />
        }, {
            path: "/filmes",
            element: <Filmes />
        }, {
            path: "/series",
            element: <Series />
        }]
    }
])

export default router