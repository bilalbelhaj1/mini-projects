import { Link } from "@tanstack/react-router";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-overlay">
        <div className="home-content">
          <i className="fas fa-film home-icon"></i>

          <h1>Discover Movies You’ll Love</h1>
          <p>
            Explore trending, top-rated, and upcoming movies. Save your
            favorites and build your personal watchlist.
          </p>

          <div className="home-actions">
            <Link to="/movies" className="btn btn-primary">
              <i className="fas fa-compass"></i>
              Explore Movies
            </Link>

            <Link to="/signin" className="btn btn-secondary">
              <i className="fas fa-user"></i>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
