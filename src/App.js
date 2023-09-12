import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Components } from "./pages/Components/Components";
import {
  NavBar,
  Sidebar,
  AlertDoc,
  AvatarDoc,
  BadgeDoc,
  ButtonDoc,
  CardDoc,
  HeadingDoc,
  ImageDoc,
  TypographyDoc,
} from "./documentation";

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
            <Route path="/docs/button" element={<ButtonDoc />} />
            <Route path="/docs/card" element={<CardDoc />} />
            <Route path="/docs/heading" element={<HeadingDoc />} />
            <Route path="/docs/image" element={<ImageDoc />} />
            <Route path="/docs/typography" element={<TypographyDoc />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
