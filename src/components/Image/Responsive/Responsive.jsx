import "./Responsive.css";

export const ResponsiveImage = ({ imgSrc, name, styles }) => {
  return (
    <>
      <img
        src={imgSrc}
        alt={name}
        className="responsive-img"
        style={{ ...styles }}
      />
    </>
  );
};
