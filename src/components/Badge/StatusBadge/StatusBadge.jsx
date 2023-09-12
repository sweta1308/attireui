import "./StatusBadge.css";

export const StatusBadge = ({ children, status = "online" }) => {
  let bgColor = "var(--green)";

  if (status === "dnd") {
    bgColor = "var(--red)";
  } else if (status === "offline") {
    bgColor = "var(--gray-text-dark)";
  } else if (status === "online") {
    bgColor = "var(--green)";
  }

  return (
    <>
      <div className="badge">
        <span className="badge-child">{children}</span>
        <span className="status" style={{ backgroundColor: bgColor }}></span>
      </div>
    </>
  );
};
