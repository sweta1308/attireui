import "./IconButton.css";

export const IconButton = ({ icon, iconText, styles }) => {
  return (
    <>
      <button className="icon-btn" style={{ ...styles }}>
        {icon}
      </button>
    </>
  );
};
