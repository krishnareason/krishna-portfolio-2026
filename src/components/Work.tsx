import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Chronos Agents",
    category: "High-Frequency Trading Swarm",
    tools: "Python, Swarm Intelligence, ZeroMQ",
    link: "https://github.com/aetherstackofficial/chronos_agents",
    image: "/images/chronos.png",
  },
  {
    name: "Aera Air",
    category: "Agentic AI Eco-Routing Engine",
    tools: "React, FastAPI, Gemini 2.5 Flash, OSRM",
    link: "https://github.com/krishnareason/aera-hackathon",
    image: "/images/aera.png",
  },
  {
    name: "AeroPredict API",
    category: "NASA Predictive Maintenance",
    tools: "FastAPI, React, XGBoost, K-Means",
    link: "https://github.com/krishnareason/nasa-predictive-maintenance",
    image: "/images/nasa.png",
  },
  {
    name: "Sentinel",
    category: "Real-Time Enterprise Telemetry",
    tools: "Node.js, WebSockets, PostgreSQL",
    link: "https://github.com/krishnareason/Sentinel",
    image: "/images/sentinel.png",
  },
  {
    name: "Zenith",
    category: "AI-Driven Financial Analytics",
    tools: "PostgreSQL, Real-time Data Pipelines",
    link: "https://github.com/krishnareason/Zenith",
    image: "/images/zenith.png",
  },
  {
    name: "Symbiosis",
    category: "Collaborative Climate Platform",
    tools: "Full-Stack Web Development",
    link: "https://github.com/krishnareason/Symbiosis",
    image: "/images/symbiosis.png",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, 
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage 
                image={project.image} 
                link={project.link} 
                alt={project.name} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;