import "./Typography.css";

export const Typography = ({
  text,
  textSizeClass,
  color,
  textDecoration,
  styles,
}) => {
  return (
    <>
      <div
        className={`typography ${textSizeClass}`}
        style={{
          color: color ? color : "",
          textDecoration: textDecoration ? textDecoration : "",
          ...styles,
        }}
      >
        {text}
      </div>
    </>
  );
};
