import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              KRISHNA
              <br />
              <span>SRIVASTAVA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>An Innovative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Software Engineer</div>
              <div className="landing-h2-2">AI/ML Integration</div>
            </h2>
            <h2>
              <div className="landing-h2-info">AI/ML Integration</div>
              <div className="landing-h2-info-1">Software Engineer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;