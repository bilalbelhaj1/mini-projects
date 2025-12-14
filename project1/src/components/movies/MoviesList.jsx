const IMAGE_BASE_URL="https://image.tmdb.org/t/p/";
const POSTER_SIZE="w220_and_h330_face";

function MoviesList({movies}) {
  return (
    <section className="movies">
            {
                movies.map(movie=>{
                    return (
                        <div key={movie.id} className="movie-card">
                            <div className="img-container">
                                <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`} height={"100%"} width={"100%"} alt="" />
                            </div>
                            <div className="movie-info">
                                <h3>{movie.original_title}</h3>
                                <span>Action, Drama</span>
                            </div>
                            <div className="actions">
                                <button className="icon-btn view" title="View details">
                                    <i className="fa-solid fa-circle-info"></i>
                                </button>
                                <button className="icon-btn save" title="Save movie">
                                    <i className="fa-solid fa-bookmark"></i>
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </section>
  )
}

export default MoviesList