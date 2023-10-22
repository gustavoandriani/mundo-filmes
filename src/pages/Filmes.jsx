import { useContext } from "react"
import PostContext from "../contexts/PostContext"
import Posts from "../components/Posts"

export default function Filmes() {
    const postList = useContext(PostContext)

    return (
        <>
            <h2>Séries</h2>

            <div style={{ borderTop: "1px solid #ED7D31", margin: "2rem 0" }}></div>

            <div className="AppContainer">       
                {
                    postList.length > 0 ? (postList.map((post) => {
                        if(post.typePost === "Filme") {
                            return (
                                <Posts
                                    key={post.key}
                                    thumbPost={post.thumbPost}
                                    titlePost={post.titlePost}
                                    typePost={post.typePost}
                                />
                            )
                        }
                        else {
                            return null
                        }
                    })
                    ) : null
                }
            </div>   
        </>
    )
}