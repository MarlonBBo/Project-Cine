


import { Props } from "../../../../ReactTs/Frontend/src/Types/Movie"
import { StarRating } from "../components/StarRating" 
import { Link } from "react-router-dom" 

export const MovieCard = (props:Props)=> {
    const movie = props.movie
    
    return(
        <div className=" flex flex-col items-center gap-3 p-2 bg-slate-700 rounded text-white font-mono">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <p className="italic text-slate-400">{movie.release_date}</p>
            <span className="flex flex-row items-center gap-2 text-yellow-300">
            <StarRating rating={movie.vote_average}/>
            </span>
            {props.showLink && <Link className="bg-slate-800 p-4 rounded " to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}