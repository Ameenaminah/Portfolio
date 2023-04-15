// import HeroImg from "../assets/intro-bg.jpeg";
import "../pages/About.css";
import "../component/Hero.css";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import "../pages/Portfolio.css";
import {projects as data} from "../data";

const Project = () => {
  const projectElements = data.map((project) => (
    <div className="project-box" key={project.id}>
      <img src={project.image} alt="" />
      <div className="project-layer">
        <h4>{project.name}</h4>
        <p>{project.description}</p>
        <a href="#">
          <FaExternalLinkSquareAlt
            size={20}
            style={{ color: "var(--second-bg-color)" }}
          />
        </a>
      </div>
    </div>
  ));

  return (
    <section className="project">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>

      <div className="project-container">{projectElements}</div>
    </section>
  );
};

export default Project;
