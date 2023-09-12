import "./SecondaryButton.css";

export const SecondaryButton = ({ buttonText, styles }) => {
  return (
    <>
      <button className="secondary-btn" style={{ ...styles }}>
        {buttonText}
      </button>
    </>
  );
};
