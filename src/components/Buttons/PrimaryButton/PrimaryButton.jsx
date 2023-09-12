import "./PrimaryButton.css";

export const PrimaryButton = ({ buttonText, styles }) => {
  return (
    <>
      <button className="primary-btn" style={{ ...styles }}>
        {buttonText}
      </button>
    </>
  );
};
