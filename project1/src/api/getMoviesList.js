import { base, options } from "./api";

export const getMoviesList = async (page = 1, genre) => {
  console.log(genre);
  const res = await fetch(
    `${base}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`,
    options,
  );

  const data = await res.json();
  console.log(data);
  return data;
};
