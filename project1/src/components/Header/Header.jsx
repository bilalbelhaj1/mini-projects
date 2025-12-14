import "./header.css";
import { Link } from "@tanstack/react-router";
function Header() {
  return (
    <header className="header">
      <Link to={"/"}>
        <div className="logo">
          <i className="fa-solid fa-film"></i>
          <span>TheMovie</span>
        </div>
      </Link>

      <ul className="nav">
        <Link to={"/movies"}>
          <li>
            <i className="fa-solid fa-clapperboard"></i>
            <span>Movies</span>
          </li>
        </Link>
        <li>
          <i className="fa-solid fa-bookmark"></i>
          <span>My Saved</span>
        </li>
      </ul>
      <div className="user">
        <span className="username">Bilal</span>
        <div className="avatar">
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
