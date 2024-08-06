import { Link, useNavigate } from "react-router-dom"
import { BiSearchAlt2 } from "react-icons/bi"
import { MdMovieFilter } from "react-icons/md"
import { useState } from "react"

import './Navbar.css'

const Navbar = () =>{

  const [Search, SetSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(Search)

    if(!Search) return

    navigate(`/Search?q=${Search}`)
    SetSearch("")
  }


    return (
    <nav id="navbar">
        <h2 className="text-xl font-bold text-blue-500">
          <Link to="/">
          <MdMovieFilter /> 0NzMovies
          </Link>
        </h2>

        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="Pesquisar filme"
            onChange={(e) => SetSearch (e.target.value)}
            value={Search}
          />

          <button type="submit">
            <BiSearchAlt2 />
          </button>

        </form>

    </nav>
      )
    
}
export default Navbar
