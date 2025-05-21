import "./error.scss";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <Header />
      <div className="ErrorContainer">
        <h1>404</h1>
        <div className="ErrorMsg">
          <h2> Oups! La page que vous demandez n'existe pas.</h2>
        </div>
        <h3>
          <Link to="/">Retourner sur la page d'acceuil</Link>
        </h3>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
