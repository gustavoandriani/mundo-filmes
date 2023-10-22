import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation"
import UserContext from "../contexts/UserContext"
import PostList from "../database/PostList";
import PostContext from "../contexts/PostContext";
import UserList from "../database/UserList";

export default function RootLayout() {

    return (
        <>
            <UserContext.Provider value={UserList}>
                <PostContext.Provider value={PostList}>
                    <Navigation />
                    <div style={{
                        marginLeft: "170px"
                    }}>
                        <Outlet />
                    </div>
                </PostContext.Provider>
            </UserContext.Provider>
        </>
    )
}