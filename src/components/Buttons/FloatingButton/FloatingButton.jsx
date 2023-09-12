import "./FloatingButton.css";

export const FloatingButton = ({ icon, styles }) => {
  return (
    <>
      <span className="floating" style={{ ...styles }}>
        {icon}
      </span>
    </>
  );
};
