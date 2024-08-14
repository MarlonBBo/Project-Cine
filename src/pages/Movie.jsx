import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { 
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
 } from "react-icons/bs"

 import Card from '../components/Card'

    const MovieURL = import.meta.env.VITE_API
    const apiKEY = import.meta.env.VITE_API_KEY



const Movie = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovie(data)
    }

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
    }

    useEffect(()=> {

        const movieURL = `${MovieURL}${id}?${apiKEY}`
        getMovie(movieURL)

    },[id])
     
    return <section className=" ">
    <div className="  text-white border rounded-xl p-5 flex flex-col lg:flex-row m-10 gap-5 bg-slate-900 border-slate-400">
        {movie && <>
        <Card movie={movie} showLink={false}/>

        <section className="p-10 flex flex-col gap-5 border rounded-xl bg-slate-950  border-slate-400 font-mono">
        <p className="">{movie.tagline}</p>
        <div className="">
            <h3 className="flex flex-row items-center gap-2">
               <span className="text-slate-500"><BsWallet2 /></span>  Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
        </div>
        <div className="">
            <h3 className="flex flex-row items-center gap-2">
            <span className="text-slate-500"> <BsGraphUp /></span> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
        </div>
        <div className="info">
            <h3 className="flex flex-row items-center gap-2">
            <span className="text-slate-500"> <BsHourglassSplit /></span> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
        </div>
        <div className="info description">
            <h3 className="flex flex-row items-center gap-2">
            <span className="text-slate-500"> <BsFillFileEarmarkTextFill /></span> Descrição:
            </h3>
            <p>{movie.overview}</p>
        </div>
        </section>
        </>}
        </div>
        </section>
}
export default Movie