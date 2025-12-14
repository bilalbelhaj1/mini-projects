import "./Movies.css";
import { useState } from "react";
import { getMoviesList } from "../../api/getMoviesList";
import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../../api/getGenres";
import MoviesList from "./MoviesList";
function Movies() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [genre, setGenere] = useState("");
  const { isLoading, data } = useQuery({
    queryKey: ["movies-list", page, genre],
    queryFn: () => getMoviesList(page, genre),
    staleTime: 30000,
  });

  const { data: generes } = useQuery({
    queryKey: ["generes-list"],
    queryFn: () => getGenres(),
    staleTime: 300000,
  });
  return (
    <main className="container">
      <div className="hedaer">
        <h3>Explore Diffrent Movies</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam in
          corporis consectetur voluptas ratione quisquam, tenetur molestiae
          facere necessitatibus tempora.
        </p>
      </div>
      <div className="filters">
        <div className="search">
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="search"
            value={search}
            className="serach-input"
            placeholder="Search..."
          />
        </div>
        {generes ? (
          <select
            name="genere"
            value={genre}
            onChange={(e) => {
              setGenere(e.target.value);
            }}
          >
            {generes.genres.map((genere) => {
              return (
                <option key={genere.id} value={genere.id}>
                  {genere.name}
                </option>
              );
            })}
          </select>
        ) : null}
      </div>
      {!isLoading ? (
        <MoviesList movies={data.results} />
      ) : (
        <main className="container">
          <div className="movies skeleton-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="movie-card skeleton">
                <div className="img-container" />
                <div className="movie-info">
                  <div className="line title" />
                  <div className="line small" />
                </div>
              </div>
            ))}
          </div>
        </main>
      )}
      <section className="pagination">
        <button
          disabled={page == 1 || isLoading}
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
        >
          previous
        </button>
        <p>
          {page}({data?.total_pages})
        </p>
        <button
          disabled={page == data?.total_pages || isLoading}
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        >
          next
        </button>
      </section>
    </main>
  );
}

export default Movies;
