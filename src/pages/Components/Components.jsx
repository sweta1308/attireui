import { Link } from "react-router-dom";
import "./Components.css";

export const Components = () => {
  document.title = "Attire UI | Components";
  return (
    <>
      <div className="component">
        <h1>Components</h1>
        <div className="components">
          <ul>
            <li>
              <Link to="/docs/alert">Alert</Link>
            </li>
            <li>
              <Link to="/docs/avatar">Avatar</Link>
            </li>
            <li>
              <Link to="/docs/badge">Badge</Link>
            </li>
            <li>
              <Link to="/docs/button">Buttons</Link>
            </li>
            <li>
              <Link to="/docs/card">Card</Link>
            </li>
            <li>
              <Link to="/docs/heading">Headings</Link>
            </li>
            <li>
              <Link to="/docs/image">Image</Link>
            </li>
            <li>
              <Link to="/docs/typography">Typography</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
