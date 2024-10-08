
    import { useNavigate, useParams } from "react-router-dom" 
    import { 
        BsGraphUp,
        BsWallet2,
        BsHourglassSplit,
        BsFillFileEarmarkTextFill
     } from "react-icons/bs"
     import { FaArrowCircleLeft } from "react-icons/fa";
    import { MovieCard } from "./MovieCard" 
    import { Movie } from "../Types/Movie" 
    import { useEffect, useState } from "react"
    
        const MovieURL = 'https://api.themoviedb.org/3/movie/'
        const apiKEY = 'api_key=290dcc808fad0704c37da9dd21933416'
    
    
    
        export default function DMovie () {
            

        const navigate = useNavigate()    
        const { id } = useParams()
        const [movie, setMovie] = useState<Movie>()
    
        const getMovie = async (url: string) => {
            const res = await fetch(url)
            const data = await res.json()
    
            setMovie(data)
        }
    
        const formatCurrency = (numero: number) => {
            return numero.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            })
        }

        const handleBack = () => {
            navigate(-1); // Volta uma página na pilha de histórico
          };
    
        useEffect(()=> {
    
            const movieURL = `${MovieURL}${id}?${apiKEY}&language=pt-BR`
            getMovie(movieURL)
    
        },[id])
         
        return <section className=" ">
        <div className="  text-white border rounded-xl p-5 flex flex-col lg:flex-row m-10 gap-5 bg-slate-900 border-slate-400">
            <button onClick={handleBack} className="text-3xl"><FaArrowCircleLeft /></button>
            {movie && <> 
            <MovieCard movie={movie} />
    
            <section className="p-10  flex flex-col gap-5 border rounded-xl bg-slate-950  border-slate-400 font-mono">
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