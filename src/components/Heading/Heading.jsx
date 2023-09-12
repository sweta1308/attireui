import "./Heading.css";

export const Heading = ({ text, selectedClass }) => {
  return (
    <>
      <div className={`heading ${selectedClass}`}>{text}</div>
    </>
  );
};
