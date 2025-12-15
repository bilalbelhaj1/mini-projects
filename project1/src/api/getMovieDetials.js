import { base, options } from "./api"

export const getMovieDetails = async (id) => {
    const res = await fetch(`${base}/movie/${id}`, options)
    const data = await res.json()
    return data;
}
