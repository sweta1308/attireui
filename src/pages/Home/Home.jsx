import { useNavigate } from "react-router-dom";
import { header } from "../../assets";
import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="content">
        <div>
          <h1>
            Streamline your projects with <span>Attire UI</span>
          </h1>
          <p>
            Elegantly designed, responsive, accessible components ready to be
            used in your website or app. Just copy and paste them in your
            project.
          </p>
          <button onClick={() => navigate("/components")}>Get Started</button>
        </div>
        <img src={header} alt="header" />
      </div>

      <div className="cards">
        <div className="card-one">
          <i className="fa-solid fa-users-line fa-2xl"></i>
          <h4>Accessible Components</h4>
          <small>
            All components come with proper attributes to ensure the full
            accessibility.{" "}
          </small>
        </div>
        <div className="card-two">
          <i className="fa-regular fa-paste fa-2xl"></i>
          <h4>Just Copy & Paste</h4>
          <small>
            All components can be copied and pasted and easily implemented to
            your projects.
          </small>
        </div>
        <div className="card-three">
          <i className="fa-solid fa-display fa-2xl"></i>
          <h4>Fully Responsive</h4>
          <small>
            Every component is fully responsive and implemented to look great at
            any screen size.
          </small>
        </div>
        <div className="card-four">
          <i className="fa-solid fa-code fa-2xl"></i>
          <h4>Vanilla CSS</h4>
          <small>
            Code used in its original form without any customization or third
            party dependencies.
          </small>
        </div>
      </div>
    </>
  );
};
