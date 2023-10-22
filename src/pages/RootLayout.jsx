import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation"
import UserContext from "../contexts/UserContext"
import UserList from "../database/UserList";

export default function RootLayout() {

    return (
        <>
            <UserContext.Provider value={UserList}>
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