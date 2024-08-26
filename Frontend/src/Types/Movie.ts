export interface Movie {
    id: number,
    title: string,
    poster_path: string,
    overview: string,
    vote_averate: number,
    release_date: number,
    vote_average: number,
    tagline: string,
    budget: number,
    revenue: number,
    runtime: number,
}

export interface Props{
    movie: Movie,
    showLink?: boolean
}