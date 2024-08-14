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
        <h2 className=" text-white text-4xl text-center mt-16 mb-16  bg-slate-800 p-10 font-mono">Melhores Filmes</h2>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 md:grid-cols-5 m-10 ">
            {TopMovies.length === 0 && <p>Carregando...</p>}
            {TopMovies.length > 0 && TopMovies.map((movie)=><Card key={movie.id} movie={movie}/>)} 
        </div>

     </div>
    )
    
}
export default Home 
