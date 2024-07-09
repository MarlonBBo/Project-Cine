import { format } from "date-fns"

import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";


const UrlIMG = import.meta.env.VITE_IMG;

const Card = ({movie, showLink = true}) =>{
    return(
        <div className="movie-card">
            <img src={UrlIMG + movie.poster_path} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <p className="format">{format(movie.release_date, "dd/MM/yyyy")}</p>
            <p>
            <FaStar /> {movie.vote_average.toFixed(1)}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}

export default Card