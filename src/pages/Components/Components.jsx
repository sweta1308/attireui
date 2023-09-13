import { useNavigate } from "react-router-dom";
import "./Components.css";

export const Components = () => {
  document.title = "Attire UI | Components";
  const navigate = useNavigate();
  return (
    <>
      <div className="component">
        <h1>Components</h1>
        <div className="components">
          <ul>
            <li onClick={() => navigate("/docs/alert")}>Alert</li>
            <li onClick={() => navigate("/docs/avatar")}>Avatar</li>
            <li onClick={() => navigate("/docs/badge")}>Badge</li>
            <li onClick={() => navigate("/docs/button")}>Buttons</li>
            <li onClick={() => navigate("/docs/card")}>Card</li>
            <li onClick={() => navigate("/docs/heading")}>Headings</li>
            <li onClick={() => navigate("/docs/image")}>Image</li>
            <li onClick={() => navigate("/docs/typography")}>Typography</li>
          </ul>
        </div>
      </div>
    </>
  );
};
