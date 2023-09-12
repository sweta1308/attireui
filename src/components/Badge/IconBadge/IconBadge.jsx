import "./IconBadge.css";

export const IconBadge = ({ icon, bgColor, count, countColor }) => {
  return (
    <>
      <div className="badge-icon">
        <span className="badge-icon-child">{icon}</span>
        <span
          className="count"
          style={{
            backgroundColor: bgColor ? bgColor : "#e80071",
            color: countColor ? countColor : "#fff",
          }}
        >
          {count}
        </span>
      </div>
    </>
  );
};
