import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { NavBar } from "./documentation/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Components } from "./pages/Components/Components";
import { Sidebar } from "./documentation/Sidebar/Sidebar";
import { AlertDoc } from "./documentation/AlertDoc/AlertDoc";
import { AvatarDoc } from "./documentation/AvatarDoc/AvatarDoc";
import { BadgeDoc } from "./documentation/BadgeDoc/BadgeDoc";

function App() {
  const location = useLocation();
  const showSidebar = !(
    location.pathname === "/" || location.pathname === "/components"
  );
  return (
    <div className="App">
      <NavBar />
      <div
        className="page-content"
        style={{ display: showSidebar ? "flex" : "" }}
      >
        {showSidebar && <Sidebar />}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/docs/alert" element={<AlertDoc />} />
            <Route path="/docs/avatar" element={<AvatarDoc />} />
            <Route path="/docs/badge" element={<BadgeDoc />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
