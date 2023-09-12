import "./NamedAvatar.css";

export const NamedAvatar = ({ text, bgColor, textColor, width, height }) => {
  return (
    <>
      <span
        className="named avatar"
        style={{
          backgroundColor: bgColor ? bgColor : "#e80071",
          color: textColor ? textColor : "#fff",
          width: width ? width : "4rem",
          height: height ? height : "4rem",
        }}
      >
        {text}
      </span>
    </>
  );
};
