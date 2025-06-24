import Accordion from "../../components/Accordion/Accordion";
import "./../../components/Accordion/accordion.scss";
import "./about.scss";
import Banner from "../../layout/Banner/Banner";

function About() {
  return (
    <div>
      <Banner image="/src/assets/BannerPicture2.svg" texte="" />

      <div className="AboutContainer">
        <Accordion label="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </Accordion>
        <Accordion label="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de pertubation du voisinage entraînera
          une exclusion de notre plateforme.
        </Accordion>
        <Accordion label="Service">
          La qualité du service est au coeur de notre engagement chez Kasa. Nous
          veillons à ce que chaque interaction, que ce soit avec nos hôtes ou
          nos locataires, soit empreinte de respect et de bienveillance.
        </Accordion>
        <Accordion label="Sécurité">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </Accordion>
      </div>
    </div>
  );
}

export default About;
