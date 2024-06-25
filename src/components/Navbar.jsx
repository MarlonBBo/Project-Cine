import { Link } from "react-router-dom"
import { BiSearchAlt2 } from "react-icons/bi"
import { MdMovieFilter } from "react-icons/md"

import './Navbar.css'

const Navbar = () =>{
    return (
    <nav id="navbar">
        <h2>
          <Link to="/">
          <MdMovieFilter /> 0NzMovies
          </Link>
        </h2>
        <form action="">
          <input type="text" placeholder="Pesquisar filme"/>
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
    </nav>
      )
    
}
export default Navbar
