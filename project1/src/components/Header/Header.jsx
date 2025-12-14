import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <i className="fa-solid fa-film"></i>
        <span>TheMovie</span>
      </div>

      <ul className="nav">
        <li>
          <i className="fa-solid fa-clapperboard"></i>
          <span>Movies</span>
        </li>
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
