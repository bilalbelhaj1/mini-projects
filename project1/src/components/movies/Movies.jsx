import "./Movies.css"
import test from "../../assets/test.png"
function Movies() {
  return (
    <main className="container">
        <div className="hedaer">
            <h3>Explore Diffrent Movies</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam in corporis consectetur voluptas ratione quisquam, tenetur molestiae facere necessitatibus tempora.</p>
        </div>
        <div className="filters">
            <div className="search">
                <input type="search" className="serach-input" placeholder="Search..."/>
            </div>
            <select name="genere">
                <option value="Drama">Drama</option>
                <option value="Action">Action</option>
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