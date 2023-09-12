import "./ImageAvatar.css";

export const ImageAvatar = ({ imgSrc, name, width, height }) => {
  return (
    <>
      <img
        src={imgSrc}
        alt={name}
        style={{
          width: width ? width : "5rem",
          height: height ? height : "5rem",
        }}
        className="avatar"
      />
    </>
  );
};
