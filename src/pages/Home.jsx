import { useContext } from "react"
import UserContext from "../contexts/UserContext"

export default function Home() {
    const userInfos = useContext(UserContext)

    return (
        <>
            <h2>Bem-vindo, <span
                            style={{
                                color: "#ED7D31" 
                            }}>{userInfos.name}</span>
            !</h2>
        </>
    )
}