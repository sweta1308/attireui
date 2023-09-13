import "./TextOnlyCard.css";

export const TextOnlyCard = ({ children, styles }) => {
  return (
    <>
      <div className="text-only" style={{ ...styles }}>
        <div>{children}</div>
      </div>
    </>
  );
};
