import "./Typography.css";

export const Typography = ({ text, textSizeClass, color, textDecoration }) => {
  return (
    <>
      <div
        className={`typography ${textSizeClass}`}
        style={{
          color: color ? color : "",
          textDecoration: textDecoration ? textDecoration : "",
        }}
      >
        {text}
      </div>
    </>
  );
};
