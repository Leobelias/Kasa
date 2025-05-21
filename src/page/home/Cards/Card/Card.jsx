import "./Card.scss";
import "../../../../data/data.json";
import { Link } from "react-router-dom";

function Card({ title, cover, id }) {
  return (
    <Link to={`/homeinfo/${id}`} className="card">
      <div>
        <img src={cover} alt={title} />
        <h1>{title}</h1>
      </div>
    </Link>
  );
}

export default Card;
