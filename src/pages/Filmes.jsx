import { useState, useEffect } from "react"
import Posts from "../components/Posts"

const apiKEY = import.meta.env.VITE_API_KEY
const moviesIMG = import.meta.env.VITE_IMG

export default function Filmes() {

    const [movieList, setMovieList] = useState([])

    const getMovieList = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovieList(data.results)
    }

    useEffect(() => {
        const movieListUrl = `https://api.themoviedb.org/3/discover/movie?${apiKEY}`

        getMovieList(movieListUrl)
    }, [])

    return (
        <>
            <h2>Filmes</h2>

            <div style={{ borderTop: "1px solid #ED7D31", margin: "2rem 0" }}></div>

            <div className="AppContainer">
                {
                    movieList.length > 0 ? (movieList.map((movie) => (
                        <Posts
                            key={movie.id}
                            thumbPost={`${moviesIMG}` + movie.poster_path}
                            titlePost={movie.title}
                            ratingPost={movie.vote_average}
                            releaseDate={movie.release_date}
                        />
                    ))
                    ) : null
                }
            </div>
        </>
    )
}