import {
  CheckCircle,
  Close,
  HelpCenter,
  Info,
  WarningAmber,
} from "@mui/icons-material";
import "./Alert.css";

export const Alert = ({ severity = "success", message, styles }) => {
  let alertIcon = <CheckCircle />;
  let alertColor = "var(--green)";

  if (severity === "error") {
    alertIcon = <Info />;
    alertColor = "var(--red)";
  } else if (severity === "warning") {
    alertIcon = <WarningAmber />;
    alertColor = "var(--yellow)";
  } else if (severity === "info") {
    alertIcon = <HelpCenter />;
    alertColor = "var(--blue)";
  }

  return (
    <div className="alert" style={{ backgroundColor: alertColor, ...styles }}>
      <Close className="close-icon" />
      <div className="alert-text">
        {alertIcon} <span>{message}</span>
      </div>
    </div>
  );
};
