import "./TextOverlayCard.css";

export const TextOverlayCard = ({ overlayText, imgSrc, name, styles }) => {
  return (
    <>
      <div className="overlay-card" style={{ ...styles }}>
        <img src={imgSrc} alt={name} />
        <span className="overlay">{overlayText}</span>
      </div>
    </>
  );
};
