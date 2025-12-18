import { useQueries } from "@tanstack/react-query"
import { getMovieDetails } from "../../api/getMovieDetials"
import MoviesList from "../movies/MoviesList";
function SavedMoviesList({ ids }) {

  const queries = ids.map(id=>({
    queryKey: ["saved", id.movie_id],
    queryFn: () => getMovieDetails(id.movie_id),
  }))

  const results = useQueries({ queries });
  const isLoading = results.some(q => q.isLoading);

  const movies = isLoading ? [] : results.map(res => res.data);

  console.log(movies);

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  return (
    <div className="saved-movies">
        <MoviesList movies={movies} />
    </div>
  )
}

export default SavedMoviesList