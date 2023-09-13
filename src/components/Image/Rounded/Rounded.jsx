import "./Rounded.css";

export const RoundedImage = ({ imgSrc, name, width, height, styles }) => {
  return (
    <>
      <img
        src={imgSrc}
        alt={name}
        style={{
          width: width ? width : "5rem",
          height: height ? height : "5rem",
          ...styles,
        }}
        className="rounded-img"
      />
    </>
  );
};
