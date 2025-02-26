import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout"
import Home from "./pages/Home";
import Tv from "./pages/Tv";
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
            path: "/tv",
            element: <Tv />
        }]
    }
])

export default router