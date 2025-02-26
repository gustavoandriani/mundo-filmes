import { useEffect, useState } from "react"
import Posts from "../components/Posts"

const apiKEY = import.meta.env.VITE_API_KEY
const televisionIMG = import.meta.env.VITE_IMG

export default function Tv() {
    const [tvList, setTvList] = useState([])
    
        const getTvList = async (url) => {
            const res = await fetch(url)
            const data = await res.json()
    
            setTvList(data.results)
        }
    
        useEffect(() => {
            const tvListUrl = `https://api.themoviedb.org/3/discover/tv?${apiKEY}`
    
            getTvList(tvListUrl)
        }, [])

    return (
        <>
            <h2>Programas de <span style={{color: "#ED7D31"}}>TV</span></h2>

            <div style={{ borderTop: "1px solid #ED7D31", margin: "2rem 0" }}></div>

            <div className="AppContainer">       
                {
                    tvList.length > 0 ? (tvList.map((program) => (
                        <Posts
                            key={program.id}
                            thumbPost={`${televisionIMG}` + program.poster_path}
                            titlePost={program.original_name}
                            ratingPost={program.vote_average}
                            releaseDate={program.first_air_date}
                        />
                    ))
                    ) : null
                }
            </div>   
        </>
    )
}