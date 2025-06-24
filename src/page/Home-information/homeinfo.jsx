import "./homeinfo.scss";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import React, { useState } from "react";
import Accordion from "../../components/Accordion/Accordion";
import Error from "../error/error";
import ChevronDroit from "../../assets/ChevronDroit.svg";
import ChevronGauche from "../../assets/ChevronGauche.svg";
import StarActive from "../../assets/star-active.svg";
import StarInactive from "../../assets/star-inactive.svg";

function HomeInfo() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  if (!logement) {
    return <Error />;
  }

  return (
    <div className="InfoPage">
      <div className="InfoContainer">
        <div className="ImgSliderContainer">
          <div className="ImgSlider">
            {logement.pictures.length > 1 && (
              <button
                className="LeftBtn"
                onClick={() => {
                  setCurrentImage(
                    currentImage === 0
                      ? logement.pictures.length - 1
                      : currentImage - 1
                  );
                }}
              >
                <img src={ChevronGauche} alt="précédente" />
              </button>
            )}

            <img
              src={logement.pictures[currentImage]}
              alt="photo logement"
              className="ImgLogement"
            />

            {logement.pictures.length > 1 && (
              <button
                className="RightBtn"
                onClick={() => {
                  setCurrentImage(
                    currentImage === logement.pictures.length - 1
                      ? 0
                      : currentImage + 1
                  );
                }}
              >
                <img src={ChevronDroit} alt="suivante" />
              </button>
            )}

            {logement.pictures.length > 1 && (
              <div className="ImgCounter">
                {currentImage + 1} / {logement.pictures.length}
              </div>
            )}
          </div>
        </div>
        <div className="Logementdesc">
          <div className="AppartmentDesc">
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
            <h3>
              {logement.tags.map((tag) => (
                <span className="TagPill" key={tag}>
                  {tag}
                </span>
              ))}
            </h3>
          </div>
          <div className="HostRatingContainer">
            <div className="HostDesc">
              <h4>{logement.host.name}</h4>

              <img
                src={logement.host.picture}
                alt={`Photographie de ${logement.host.name}`}
              ></img>
            </div>
            <div className="StarsRating">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={i <= logement.rating ? StarActive : StarInactive}
                  alt={`${logement.rating} étoiles`}
                  className="StarIcon"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="DescBox">
          <Accordion label="Description">{logement.description}</Accordion>
          <Accordion label="Équipements">
            <div>
              {logement.equipments.map((eq) => (
                <div key={eq}>{eq}</div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default HomeInfo;
