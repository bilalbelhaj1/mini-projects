import "./Movies.css"
import { useEffect, useState } from "react"
import { getMoviesList } from "../../api/getMoviesList";
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/";
const POSTER_SIZE="w220_and_h330_face";
import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../../api/getGenres";
function Movies() {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1); 
    const [genre, setGenere] = useState('')
    const {isLoading, data } = useQuery({
        queryKey: ["movies-list", page, genre],
        queryFn: () => getMoviesList(page, genre),
        staleTime: 30000,
    });

    const { data: generes } = useQuery({
        queryKey: ["generes-list"],
        queryFn: () => getGenres(),
        staleTime: 300000
    });

    if (isLoading) {
  return (
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
  );
}
  return (
    <main className="container">
        <div className="hedaer">
            <h3>Explore Diffrent Movies</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam in corporis consectetur voluptas ratione quisquam, tenetur molestiae facere necessitatibus tempora.</p>
        </div>
        <div className="filters">
            <div className="search">
                <input
                 onChange={(e)=>{setSearch(e.target.value)}}
                 type="search" 
                 value={search}
                 className="serach-input" placeholder="Search..."
                 />
            </div>
            <select
             name="genere"
             value={genre}
             onChange={(e)=>{setGenere(e.target.value)}}
            >
                {
                    generes.genres.map(genere=>{
                        return <option key={genere.id} value={genere.id}>{genere.name}</option>
                    })
                }
            </select>
        </div>
        <section className="movies">
            {
                data.results.map(movie=>{
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
        <section className="pagination">
            <button 
              disabled={(page == 1) || isLoading}
              onClick={()=>{setPage(prev => prev - 1)}} 
            >previous</button>
            <p>{page}({data.total_pages})</p>
            <button
              disabled={(page==data.total_pages) || isLoading}
              onClick={()=>{setPage(prev=>prev + 1)}}
            >next</button>
        </section>
    </main>
  )
}

export default Movies