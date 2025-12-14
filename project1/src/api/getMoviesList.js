const tmdbkey = import.meta.env.VITE_ACCESS_TOKEN;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbkey}`
  }
};

export const getMoviesList = async (page=1) => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, options);
    const data = await res.json();
    console.log(data);
    return data;
}