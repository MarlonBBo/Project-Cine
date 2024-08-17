import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import Card from "../components/Card"

const searchURl = import.meta.env.VITE_SEARCH
const apiKEY = import.meta.env.VITE_API_KEY



const Search = () => {

    const [searchParams] = useSearchParams()

    const [movies, SetMovies] = useState([])
    const query = searchParams.get('q')

    const getSearchedMovies = async (url) =>{
        const res = await fetch(url)
        const data = await res.json()

        SetMovies(data.results)
    }

    useEffect(() => {

        const searchQueryUrl = `${searchURl}?${apiKEY}&query=${query}`

        getSearchedMovies(searchQueryUrl)
    }, [query]) 



    return (
        <section>
        <h2 className=" text-white text-4xl text-center mt-16 mb-16  bg-slate-800 p-10 font-mono">Resultados para: <span className="text-red-600">{query}</span></h2>
        <div className="">
            
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-5 m-10">
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map((movie)=><Card key={movie.id} movie={movie}/>)} 
            </div>
    
         </div>
         </section>
        )
}
export default Search