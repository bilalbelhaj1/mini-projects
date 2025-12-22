import { Link } from "@tanstack/react-router";
import { saveMovie, unsaveMovie } from "../../api/saveMovie";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
const POSTER_SIZE = "w220_and_h330_face";

function MoviesList({ movies, savedMovies }) {

  const { user } = useContext(UserContext);
  
  async function save(id) {
    console.log(id);
    console.log(savedMovies);
    if (savedMovies.includes(id)) {
      try {
        const res = await unsaveMovie(user.userId, Number(id));
        console.log(res);
        alert("Movie removed from saved Movies")
      } catch  (err) {
        console.log(err)
        console.log("Something went wrong")
      }
      return;
    }
    try {
      const res = await saveMovie({
        movie_id: Number(id),
        userId: user.userId
      })
      console.log(res);
      alert("Movie saved ");
    } catch(err) {
      console.log(err);
      console.log("Could not save the movie something went wrong")
    }
  }

  return (
    <section className="movies">
      {movies.map((movie) => {
        return (
          <Link key={movie.id} to={`/movieDetails?id=${movie.id}`} >
             <div className="movie-card">
            <div className="img-container">
              <img
                src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`}
                alt={movie.original_title}
              />
              <div className="rating">
                <i className="fa-solid fa-star"></i>
                {movie.vote_average.toFixed(1)}
              </div>
            </div>

            <div className="movie-info">
              <h3>{movie.original_title}</h3>
            </div>

            <div className="actions">
              <button className="icon-btn view" title="View details">
                <i className="fa-solid fa-circle-info"></i>
              </button>
              <button onClick={(e)=>{e.preventDefault();
    e.stopPropagation();save(movie.id)}} className="icon-btn save" title="Save movie">
                <i className="fa-solid fa-bookmark"></i>
              </button>
            </div>
          </div>
          </Link>
        );
      })}
    </section>
  );
}

export default MoviesList;
