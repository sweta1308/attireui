import { Close } from "@mui/icons-material";
import "./DismissCard.css";

export const DismissCard = ({ children, styles }) => {
  return (
    <>
      <div className="dismiss-card" style={{ ...styles }}>
        <div className="dismiss-icon">
          <Close sx={{ fontSize: "14px" }} />
        </div>
        <div className="dismiss-children">{children}</div>
      </div>
    </>
  );
};
