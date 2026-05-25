import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact" style={{ color: "#ffffff" }}>
      <div className="contact-container">
        <h3 style={{ color: "#ffffff" }}>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4 style={{ color: "#c2a4ff" }}>Email</h4>
            <p>
              <a href="mailto:ksrivastava9199@gmail.com" data-cursor="disable" style={{ color: "#ffffff" }}>
                ksrivastava9199@gmail.com
              </a>
            </p>
            <h4 style={{ color: "#c2a4ff", marginTop: "20px" }}>Phone</h4>
            <p>
              <a href="tel:+919199326358" data-cursor="disable" style={{ color: "#ffffff" }}>
                +91 9199326358
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4 style={{ color: "#c2a4ff" }}>Social</h4>
            <a
              href="https://github.com/krishnareason"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              style={{ color: "#ffffff" }}
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-srivastava-970120340/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              style={{ color: "#ffffff" }}
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2 style={{ color: "#ffffff" }}>
              Designed and Developed <br /> by <span style={{ color: "#c2a4ff" }}>Krishna Srivastava</span>
            </h2>
            <h5 style={{ color: "#adacac" }}>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;