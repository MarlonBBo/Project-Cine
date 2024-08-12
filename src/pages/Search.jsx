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
        <div className="">
            <h2 className="">Resultados para: <span className="">{query}</span></h2>
            <div className="">
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map((movie)=><Card key={movie.id} movie={movie}/>)} 
            </div>
    
         </div>
        )
}
export default Search