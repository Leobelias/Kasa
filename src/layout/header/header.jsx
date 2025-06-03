import Logo from "./Logo/Logo.jsx";
import "./header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="HeaderContainer">
      <div className="header">
        <div className="Logo-header">
          <Logo />
        </div>

        <div className="Text-header">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            <h2>Accueil</h2>
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <h3>A propos</h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
