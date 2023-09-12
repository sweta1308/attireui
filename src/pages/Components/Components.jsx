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
              <Link>Buttons</Link>
            </li>
            <li>
              <Link>Card</Link>
            </li>
            <li>
              <Link>Headings</Link>
            </li>
            <li>
              <Link>Image</Link>
            </li>
            <li>
              <Link>Text</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
