import Logo from "./Logo/Logo.jsx";
import "./header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="HeaderContainer">
      <div className="header">
        <div className="Logo-header">
          <Logo />
        </div>

        <div className="Text-header">
          <Link to={`/`}>
            <h2>Accueil</h2>
          </Link>
          <Link to={"/About"}>
            <h3>A propos</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
