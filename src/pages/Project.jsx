// import HeroImg from "../assets/intro-bg.jpeg";
import "../pages/About.css";
import "../component/Hero.css";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import "../pages/Portfolio.css";
import data from "../data";

const Project = () => {
  const projectElements = data.map((project) => (
    <div className="portfolio-box" key={project.id}>
      <img src={project.image} alt="" />
      <div className="portfolio-layer">
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
    <section className="portfolio">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>

      <div className="portfolio-container">{projectElements}</div>
    </section>
  );
};

export default Project;
