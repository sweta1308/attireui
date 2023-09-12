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
            <NavLink to="/">Card</NavLink>
          </li>
          <li>
            <NavLink to="/">Heading</NavLink>
          </li>
          <li>
            <NavLink to="/">Image</NavLink>
          </li>
          <li>
            <NavLink to="/">Typography</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
