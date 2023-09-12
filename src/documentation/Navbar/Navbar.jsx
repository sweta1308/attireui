import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import { logo } from "../../assets";
import "./Navbar.css";

export const NavBar = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const components = [
    "alert",
    "avatar",
    "badge",
    "button",
    "card",
    "heading",
    "image",
    "typography",
  ];
  const handleClick = () => {
    if (components.includes(searchInput.toLowerCase())) {
      navigate(`/docs/${searchInput.toLowerCase()}`);
    } else {
      alert(`Oops! ${searchInput} component not found!`);
    }
    setSearchInput("");
  };

  return (
    <>
      <nav>
        <div className="navigation">
          <Menu className="menu-icon" />
          <img src={logo} alt="logo" onClick={() => navigate("/")} />
          <div className="desktop-search">
            <input
              className="input"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <i
              className="fa-solid fa-magnifying-glass search"
              onClick={handleClick}
            ></i>
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
        </div>

        <div className="mobile-search">
          <input
            className="input"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <i
            className="fa-solid fa-magnifying-glass search"
            onClick={handleClick}
          ></i>
        </div>
      </nav>
    </>
  );
};
