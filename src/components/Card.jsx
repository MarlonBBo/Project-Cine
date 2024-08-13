/* eslint-disable react/prop-types */
import { format } from "date-fns"

import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";


const UrlIMG = import.meta.env.VITE_IMG;


const Card = ({movie, showLink = true}) =>{
    return(
        <div className=" flex flex-col items-center gap-3 p-2 bg-slate-700 rounded text-white font-mono">
            <img src={UrlIMG + movie.poster_path} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <p className="italic text-slate-400">{format(movie.release_date, "dd/MM/yyyy")}</p>
            <p className="flex flex-row items-center gap-2 text-yellow-300">
            <FaStar /> <p className="text-white">{movie.vote_average.toFixed(1)}</p>
            </p>
           {showLink && <Link className="bg-slate-800 p-4 rounded " to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}

export default Card