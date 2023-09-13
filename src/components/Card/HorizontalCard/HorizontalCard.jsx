import "./HorizontalCard.css";

export const HorizontalCard = ({ imgSrc, children, name, styles }) => {
  return (
    <>
      <div className="horizontal-card" style={{ ...styles }}>
        <img src={imgSrc} alt={name} />
        <div className="horizontal">{children}</div>
      </div>
    </>
  );
};
