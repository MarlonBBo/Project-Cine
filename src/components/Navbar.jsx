import { Link, useNavigate } from "react-router-dom"
import { BiSearchAlt2 } from "react-icons/bi"
import { MdMovieFilter } from "react-icons/md"
import { useState } from "react"



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
    <nav id="navbar" className=" m-16 flex flex-col gap-5 justify-between sm:flex-row">
        <h2 className="text-3xl text-white font-mono">
          <Link to="/" className=" flex flex-row items-center gap-3 font-mono bg-slate-800 p-2 rounded-xl hover:ring-slate-500 hover:ring-1">
          <MdMovieFilter />0Nz<span className="bg-slate-500 rounded-xl px-2 items-center text-white ">Tube</span>
          </Link>
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-row gap-3" >
          <input 
            className="border rounded-xl placeholder:italic pl-4  "
            type="text"
            placeholder="Pesquisar filme"
            onChange={(e) => SetSearch (e.target.value)}
            value={Search}
          />

          <button type="submit" className="bg-slate-500 text-3xl  text-slate-900 rounded-xl p-2 hover:ring-slate-200 hover:ring-1 ">
            <BiSearchAlt2 />
          </button>

        </form>

    </nav>
      )
    
}
export default Navbar
