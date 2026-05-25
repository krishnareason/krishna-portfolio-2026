import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software & IT Intern</h4>
                <h5>Tata Power</h5>
              </div>
              <h3>Jun - Jul 2025</h3>
            </div>
            <p>
              Engineered "Sentinel," a real-time enterprise telemetry dashboard monitoring SCADA networks and IT/OT integration. Built automated Node.js WebSocket incident workflows and optimized complex PostgreSQL queries for continuous industrial data streams.
            </p>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Engineering Team Lead</h4>
                <h5>Competitive Hackathons</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Architected scalable backend platforms and led cross-functional engineering teams under strict time constraints. Secured a Top 30 finish (out of 450+ participants) at "Hack Among Us" and a Top 50 finish at "HackHeritage 3.0" for a collaborative sustainability platform.
            </p>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Member & Campus Ambassador</h4>
                <h5>GDG HITK & Techniche (IIT G)</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Active member of Google Developer Group, conducting technical code reviews and driving collaborative software engineering initiatives. Previously spearheaded campus outreach and technical workshops for IIT Guwahati's technical management festival.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Career;