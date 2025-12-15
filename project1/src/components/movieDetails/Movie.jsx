import "./movieDetails.css";

function Movie({ movie }) {
  if (!movie) return <div className="loading">Loading...</div>;

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div
      className="movie-details"
      style={{
        backgroundImage: `url(${backdropUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="movie-overlay">
        <div className="movie-content">
          <img className="movie-poster" src={posterUrl} alt={movie.title} />
          <div className="movie-info">
            <h1 className="movie-title">{movie.title}</h1>
            <p className="tagline">{movie.tagline}</p>
            <p className="overview">{movie.overview}</p>

            <div className="movie-meta">
              <span><strong>Release:</strong> {movie.release_date}</span>
              <span><strong>Runtime:</strong> {movie.runtime} min</span>
              <span><strong>Rating:</strong> {movie.vote_average} ⭐ ({movie.vote_count})</span>
              <span><strong>Budget:</strong> ${movie.budget.toLocaleString()}</span>
              <span><strong>Revenue:</strong> ${movie.revenue.toLocaleString()}</span>
            </div>

            <div className="genres">
              {movie.genres.map(genre => (
                <span key={genre.id} className="genre">{genre.name}</span>
              ))}
            </div>

            <div className="production-companies">
              <h3>Production Companies:</h3>
              <div className="companies-list">
                {movie.production_companies.map(pc => (
                  <div key={pc.id} className="company">
                    {pc.logo_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w200${pc.logo_path}`}
                        alt={pc.name}
                      />
                    ) : (
                      <span>{pc.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <a
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="movie-homepage"
            >
              Visit Official Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
