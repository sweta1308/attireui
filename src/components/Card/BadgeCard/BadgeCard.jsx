import "./BadgeCard.css";

export const BadgeCard = ({ badgeText, children, styles }) => {
  return (
    <>
      <div className="badge-card" style={{ ...styles }}>
        <div className="text-badge">{badgeText}</div>
        <div>{children}</div>
      </div>
    </>
  );
};
