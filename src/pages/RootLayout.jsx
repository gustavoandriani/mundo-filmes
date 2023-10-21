import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation"
import UserContext from "../contexts/UserContext"

export default function RootLayout() {
    const user = {
        name: "Gustavo",
        email: "gustavo@gmail.com"
    }

    return (
        <>
            <UserContext.Provider value={user}>
                <Navigation />
                <div style={{
                    marginLeft: "170px"
                }}>
                    <Outlet />
                </div>
            </UserContext.Provider>
        </>
    )
}