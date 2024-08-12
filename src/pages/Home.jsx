import { useEffect, useState } from "react"
import Card from "../components/Card"



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
        
    <div className="">
        <h2 className="mt-7 text-white text-4xl text-center">Melhores Filmes</h2>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
            {TopMovies.length === 0 && <p>Carregando...</p>}
            {TopMovies.length > 0 && TopMovies.map((movie)=><Card key={movie.id} movie={movie}/>)} 
        </div>

     </div>
    )
    
}
export default Home 
