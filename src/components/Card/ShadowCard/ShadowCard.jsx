import "./ShadowCard.css";

export const ShadowCard = ({ children, styles }) => {
  return (
    <>
      <div className="shadow-card" style={{ ...styles }}>
        {children}
      </div>
    </>
  );
};
