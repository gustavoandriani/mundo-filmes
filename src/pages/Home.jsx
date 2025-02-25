import { useContext, useState, useEffect } from "react"
import UserContext from "../contexts/UserContext"
import Posts from "../components/Posts"

const filmesURL = import.meta.env.VITE_API
const apiKEY = import.meta.env.VITE_API_KEY
const filmesIMG = import.meta.env.VITE_IMG

export default function Home() {
    const userInfos = useContext(UserContext)

    const [topFilmes, setTopFilmes] = useState([])

    const getTopFilmes = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopFilmes(data.results)
    }

    useEffect(() => {
        const topFilmesUrl = `${filmesURL}top_rated?${apiKEY}`

        getTopFilmes(topFilmesUrl)
    }, [])

    return (
        <>
            <h2>Bem-vindo, <span
                            style={{
                                color: "#ED7D31" 
                            }}>{userInfos.name}</span>
            !</h2>
            
            <div style={{ borderTop: "1px solid #ED7D31", margin: "2rem 0" }}></div>

            <h2>Melhor <span style={{ color: "#ED7D31" }}>avaliados</span></h2>  

            <div className="AppContainer">   
                {
                    topFilmes.length > 0 ? (topFilmes.map((filme) => (
                        <Posts
                            key={filme.id}
                            thumbPost={`${filmesIMG}` + filme.poster_path}
                            titlePost={filme.title}
                            ratingPost={filme.vote_average}
                            releaseDate={filme.release_date}
                        />
                    ))
                    ) : null
                }
            </div>             
        </>
    )
}