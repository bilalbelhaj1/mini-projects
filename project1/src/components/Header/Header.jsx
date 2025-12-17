import "./header.css";
import { useContext } from "react";
import { Link } from "@tanstack/react-router";
import { UserContext } from "../../contexts/userContext";
function Header() {
  const { user, logout, isAuthenticated } = useContext(UserContext);

  async function handleLogout() {
    await logout();
  }

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
      {
        isAuthenticated ? (
          <div className="user">
            <span className="username">{user.username}</span>
            <div className="avatar">
              <i className="fa-solid fa-user"></i>
            </div>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        ) : <Link to={"/login"} ><button className="signin-btn">sign in or sign up</button></Link>
      }
    </header>
  );
}

export default Header;
