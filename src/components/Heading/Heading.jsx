import "./Heading.css";

export const Heading = ({ text, selectedClass, styles }) => {
  return (
    <>
      <div className={`heading ${selectedClass}`} style={{ ...styles }}>
        {text}
      </div>
    </>
  );
};
