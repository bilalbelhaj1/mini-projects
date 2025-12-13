import "./Movies.css"
import test from "../../assets/test.png"
import { useState } from "react"
function Movies() {
    const [search, setSearch] = useState("");
    const [genre, setGenere] = useState("action");
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
                <option value="drama">Drama</option>
                <option value="action">Action</option>
            </select>
        </div>
        <section className="movies">
            {
                [1,2,3,4,5,6].map(item=>{
                    return (
                        <div key={item} className="movie-card">
                            <div className="img-container">
                                <img src={test} height={"100%"} width={"100%"} alt="" />
                            </div>
                            <div className="movie-info">
                                <h3>The Dark night</h3>
                                <span>Action, Drama</span>
                            </div>
                            <div className="actions">
                                <button>X</button>
                                <button>S</button>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    </main>
  )
}

export default Movies