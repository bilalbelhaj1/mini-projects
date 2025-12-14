const tmdbkey = import.meta.env.VITE_ACCESS_TOKEN;
export const base = "https://api.themoviedb.org/3"
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbkey}`
  }
};