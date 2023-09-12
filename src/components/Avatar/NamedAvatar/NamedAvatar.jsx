import "./NamedAvatar.css";

export const NamedAvatar = ({ text, bgColor, textColor, width, height }) => {
  return (
    <>
      <span
        className="named avatar"
        style={{
          backgroundColor: bgColor ? bgColor : "#e80071",
          color: textColor ? textColor : "#fff",
          width: width ? width : "6rem",
          height: height ? height : "6rem",
        }}
      >
        {text}
      </span>
    </>
  );
};
