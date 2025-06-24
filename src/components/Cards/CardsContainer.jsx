import Card from "./Card/Card.jsx";
import "./cardscontainer.scss";
import data from "../../data/data.json";

const CardInfo = data.map((item) => {
  return <Card title={item.title} cover={item.cover} id={item.id} />;
});

function CardContainer() {
  return (
    <div className="Container">
      <div className="BodyContainer">
        <div className="CardContainer">{CardInfo}</div>
      </div>
    </div>
  );
}

export default CardContainer;
