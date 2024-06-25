import { useEffect, useState } from "react"
import Card from "../components/Card"

import './MoviesGrid.css';

const MovieURL = import.meta.env.VITE_API
const apiKEY = import.meta.env.VITE_API_KEY

const Home = () => {

    const [TopMovies, SetTopMovies] = useState([])

    const getTopRatedMovies = async (url) =>{
        const res = await fetch(url)
        const data = await res.json()

        SetTopMovies(data.results)
    }

    useEffect(() => {

        const TopRatedUrl = `${MovieURL}top_rated?${apiKEY}`

        getTopRatedMovies(TopRatedUrl)
    }, [])
    return (
    <div className="container">
        <h2 className="title">Melhores Filmes</h2>
        <div className="movies-container">
            {TopMovies.length === 0 && <p>Carregando...</p>}
            {TopMovies.length > 0 && TopMovies.map((movie)=><Card key={movie.id} movie={movie}/>)} 
        </div>

     </div>
    )
    
}
export default Home 
