import { NavLink } from "react-router-dom";
import "./custom-styles/NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink exact = "true" to="/" className="navbar-link" activeclassname="navbar-link-active">
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/favourites" className="navbar-link" activeclassname="navbar-link-active">
            Favourites
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/joke-of-the-day" className="navbar-link" activeclassname="navbar-link-active">
            Joke of the Day
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/submit-joke" className="navbar-link" activeclassname="navbar-link-active">
            Submit Joke
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/share-joke" className="navbar-link" activeclassname="navbar-link-active">
            Share Joke
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/settings" className="navbar-link" activeclassname="navbar-link-active">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;