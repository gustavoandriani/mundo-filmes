import { useContext } from "react"
import UserContext from "../contexts/UserContext"
import Posts from "../components/Posts"

export default function Home() {
    const userInfos = useContext(UserContext)
    
    const postList = [
    {
        id: Math.floor(Math.random() * 1000000),
        thumbPost: "https://piratefilmes.net/wp-content/uploads/2023/10/Baixar-Filme-e-Series-Gratis-19.jpg.webp",
        titlePost: "Loki 2ª Temporada (2023) Dublado",

    },    
]

    return (
        <>
            <h2>Bem-vindo, <span
                            style={{
                                color: "#ED7D31" 
                            }}>{userInfos.name}</span>
            !</h2>
            
            <div style={{ borderTop: "1px solid #ED7D31", margin: "2rem 0" }}></div>

            <div className="AppContainer">       
                {
                    postList.length > 0 ? (postList.map((post) => (
                        <Posts
                            key={post.key}
                            thumbPost={post.thumbPost}
                            titlePost={post.titlePost}
                        />
                    ))
                    ) : null
                }
            </div>             
        </>
    )
}