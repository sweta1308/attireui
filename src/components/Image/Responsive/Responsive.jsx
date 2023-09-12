import "./Responsive.css";

export const ResponsiveImage = ({ imgSrc, name }) => {
  return (
    <>
      <img src={imgSrc} alt={name} className="responsive-img" />
    </>
  );
};
