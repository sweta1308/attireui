import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const activeStyles = ({ isActive }) => ({
    color: isActive ? "#e80071" : "",
    fontWeight: isActive ? "600" : "",
  });
  return (
    <>
      <div className="sidebar">
        <h3>Components</h3>
        <ul>
          <li>
            <NavLink to="/docs/alert" style={activeStyles}>
              Alert
            </NavLink>
          </li>
          <li>
            <NavLink to="/docs/avatar" style={activeStyles}>
              Avatar
            </NavLink>
          </li>
          <li>
            <NavLink to="/docs/badge" style={activeStyles}>
              Badge
            </NavLink>
          </li>
          <li>
            <NavLink to="/docs/button" style={activeStyles}>
              Button
            </NavLink>
          </li>
          <li>
            <NavLink to="/docs/card" style={activeStyles}>
              Card
            </NavLink>
          </li>
          <li>
            <NavLink to="/docs/heading" style={activeStyles}>
              Heading
            </NavLink>
          </li>
          <li>
            <NavLink to="/docs/image" style={activeStyles}>
              Image
            </NavLink>
          </li>
          <li>
            <NavLink to="/docs/typography" style={activeStyles}>
              Typography
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
