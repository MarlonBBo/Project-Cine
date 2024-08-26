import { Link } from "react-router-dom" 
import { useNavigate } from "react-router-dom" 
import { FormEvent, useEffect, useState } from "react"
import { BiSearchAlt2 } from "react-icons/bi"
import { MdMovieFilter } from "react-icons/md"
import { useAuth } from "../AuthProvider/useAuth"
import Cookies from "js-cookie";

export interface Item {
  name: string
}


export const Navbar = ()=>{

    const auth = useAuth();
    const navigate = useNavigate()

    const logout = () => {
        auth.logout();
        Cookies.remove('u')
        navigate('/signin')
      };

  const [search, setSearch] = useState<string>("")
  const [item, setItem] = useState<Item | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(search)

    if(!search) return 

    navigate(`/search?q=${search}`)
    setSearch("")
  }

  useEffect(()=>{
    const getName = Cookies.get('u');
  if (getName) {
    try {
      const parsedItem = JSON.parse(getName);
      if (parsedItem && typeof parsedItem === 'object' && 'name' in parsedItem) {
        setItem(parsedItem);
      }
    } catch (error) {
      console.error('erro ao pegar item no localStorage:', error);
    }
  }
  },[])



  return (
    <div>
      <div className="flex flex-row justify-end gap-5 h-20">
      {item && <h1>{item.name}</h1>}
        <button className="text-white my-4 bg-slate-500 items-center justify-center px-5 rounded-md">
          Signin
        </button>
        <button className="text-white my-4 bg-slate-500 items-center justify-center px-5 mr-4 rounded-md " onClick={logout}>
          Logout
        </button>
      </div>
      <nav id="navbar" className="m-16 mt-0 flex flex-col gap-5 justify-between sm:flex-row border-b-2 border-slate-500 pb-6 px-6 rounded-lg">
        <h2 className="text-3xl text-white font-mono">
          <Link to="/">
            <div className="flex flex-row items-center gap-3 font-mono bg-slate-800 p-2 rounded-xl hover:ring-slate-500 hover:ring-1">
              <MdMovieFilter />0Nz
              <span className="bg-slate-500 rounded-xl px-2 items-center text-white">Movies</span>
            </div>
          </Link>
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-row gap-3">
          <input
            className="border rounded-xl placeholder:italic pl-4"
            type="text"
            placeholder="Pesquisar filme"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit" className="bg-slate-500 text-3xl text-slate-900 rounded-xl p-2 hover:ring-slate-200 hover:ring-1">
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </div>
  );
}