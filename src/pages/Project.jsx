import HeroImg from "../assets/intro-bg.jpeg";
import "../pages/About.css";
import "../component/Hero.css";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import '../pages/Portfolio.css'

const Project = () => {
  return (
    <section className="portfolio">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={HeroImg} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo culpa perspiciatis hic quisquam ipsa quia voluptate
              provident fugit. Adipisci quos quia, dolore ab modi non quo
              repudiandae soluta quaerat sed.
            </p>
            <a href="#">
              <FaExternalLinkSquareAlt
                size={20}
                style={{ color: "var(--second-bg-color)" }}
              />
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={HeroImg} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo culpa perspiciatis hic quisquam ipsa quia voluptate
              provident fugit. Adipisci quos quia, dolore ab modi non quo
              repudiandae soluta quaerat sed.
            </p>
            <a href="#">
              <FaExternalLinkSquareAlt
                size={20}
                style={{ color: "var(--second-bg-color)" }}
              />
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={HeroImg} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo culpa perspiciatis hic quisquam ipsa quia voluptate
              provident fugit. Adipisci quos quia, dolore ab modi non quo
              repudiandae soluta quaerat sed.
            </p>
            <a href="#">
              <FaExternalLinkSquareAlt
                size={20}
                style={{ color: "var(--second-bg-color)" }}
              />
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={HeroImg} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo culpa perspiciatis hic quisquam ipsa quia voluptate
              provident fugit. Adipisci quos quia, dolore ab modi non quo
              repudiandae soluta quaerat sed.
            </p>
            <a href="#">
              <FaExternalLinkSquareAlt
                size={20}
                style={{ color: "var(--second-bg-color)" }}
              />
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={HeroImg} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo culpa perspiciatis hic quisquam ipsa quia voluptate
              provident fugit. Adipisci quos quia, dolore ab modi non quo
              repudiandae soluta quaerat sed.
            </p>
            <a href="#">
              <FaExternalLinkSquareAlt
                size={20}
                style={{ color: "var(--second-bg-color)" }}
              />
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={HeroImg} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo culpa perspiciatis hic quisquam ipsa quia voluptate
              provident fugit. Adipisci quos quia, dolore ab modi non quo
              repudiandae soluta quaerat sed.
            </p>
            <a href="#">
              <FaExternalLinkSquareAlt
                size={20}
                style={{ color: "var(--second-bg-color)" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
