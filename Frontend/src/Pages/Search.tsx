import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { MovieCard } from "./MovieCard" 
import { Movie } from "../Types/Movie"


const searchURl = import.meta.env.VITE_SEARCH
const apiKEY = import.meta.env.VITE_API_KEY

export const Search = () => {

    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState<Movie[]>([])
    const query = searchParams.get('q')

    const getSearchedMovies = async (url: string) =>{
        const res = await fetch(url)
        const data = await res.json()

        setMovies(data.results)
    }

    useEffect(() => {

        const searchQueryUrl = `${searchURl}?${apiKEY}&query=${query}&language=pt-BR`

        getSearchedMovies(searchQueryUrl)
    }, [query]) 



    return (
        <section>
        <h2 className=" text-white text-4xl text-center mt-16 mb-16  bg-slate-800 p-10 font-mono">Resultados para: <span className="text-red-600">{query}</span></h2>
        <div className="">
            
            <div className="grid grid-cols-1 gap-5 sm:mx-20 lg:mx-36 xl:mx-52 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:mx-64 2xl:grid-cols-5 m-3">
                {movies.length === 0 && <p className="text-3xl text-center text-white">sem resultados</p>}
                {movies.length > 0 && movies.map((movie)=><MovieCard key={movie.id} movie={movie} showLink/>)} 
            </div>
    
         </div>
         </section>
        )
}