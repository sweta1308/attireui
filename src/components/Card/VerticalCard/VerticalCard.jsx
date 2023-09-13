import "./VerticalCard.css";

export const VerticalCard = ({ imgSrc, children, name, styles }) => {
  return (
    <>
      <div className="vertical-card" style={{ ...styles }}>
        <img src={imgSrc} alt={name} />
        <div className="vertical">{children}</div>
      </div>
    </>
  );
};
