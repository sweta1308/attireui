import "./LinkButton.css";

export const LinkButton = ({ buttonText, linkSrc, styles }) => {
  return (
    <>
      <button className="link-btn">
        <a
          href={linkSrc}
          target="_blank"
          rel="noreferrer"
          style={{ ...styles }}
        >
          {buttonText}
        </a>
      </button>
    </>
  );
};
