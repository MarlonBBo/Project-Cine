
import { useEffect, useState } from "react"
import { Movie } from "../Types/Movie"
import axios from "axios"
import { MovieCard } from "./MovieCard"


export const Home = () => {

    const [movie, setMovie] = useState<Movie[]>([])

    useEffect(()=>{
        getMovies()
    },[])

    const getMovies = () =>{
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '290dcc808fad0704c37da9dd21933416',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovie(response.data.results)
        }) 
    }

     return(
       <div className="">
        <h2 className=" text-white text-4xl text-center mt-16 mb-16  bg-slate-800 p-10 font-mono">Melhores Filmes</h2>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 m-10">
            {movie.map((movie)=><MovieCard key={movie.id} movie={movie} showLink/>)} 
        </div>

     </div>
     )
}