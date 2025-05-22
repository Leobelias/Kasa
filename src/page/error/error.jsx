import "./error.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <div className="ErrorContainer">
        <h1>404</h1>
        <div className="ErrorMsg">
          <h2> Oups! La page que vous demandez n'existe pas.</h2>
        </div>
        <h3>
          <Link to="/">Retourner sur la page d'acceuil</Link>
        </h3>
      </div>
    </div>
  );
}

export default Error;
