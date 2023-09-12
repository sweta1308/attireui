import { useNavigate } from "react-router-dom";
import { logo } from "../../assets";
import "./Navbar.css";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <img src={logo} alt="logo" onClick={() => navigate("/")} />
        <div>
          <input className="input" placeholder="Search..." />
          <i className="fa-solid fa-magnifying-glass search"></i>
        </div>
        <div className="menu">
          <a href="/">Home</a>
          <a href="/components">Components</a>
          <a
            href="https://github.com/sweta1308/attireui"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
        </div>
      </nav>
    </>
  );
};
