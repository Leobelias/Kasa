import "./banner.scss";

function Banner({ image, texte }) {
  const background = image || "/src/assets/BannerPicture.svg";
  const DefaultTexte =
    texte === undefined ? "Chez vous, partout et ailleurs" : texte;
  return (
    <div className="BannerContainer">
      <div
        className="Banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${background}')`,
        }}
      >
        <h1>{DefaultTexte}</h1>
      </div>
    </div>
  );
}

export default Banner;
