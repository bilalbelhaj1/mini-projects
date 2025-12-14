import { base, options } from "./api";

export const getGenres = async () => {
    const res = await fetch(`${base}/genre/movie/list?language=en`, options);
    const data = res.json()
    return data;
}