import "./header.css"
import logo from "../../assets/react.svg"
function Header() {
  return (
    <div className="header">
        <span className="logo">
            <h2>TheMovie</h2>
        </span>
        <ul className="items">
            <li className="username">
                bilal belhaj
            </li>
            <li>
                <img src={logo}/>
            </li>
        </ul>
    </div>
  )
}

export default Header