import "../component/Hero.css";
import HeroImg from "../assets/intro-bg.jpeg";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero home">
      <div className="mask">
        <img src={HeroImg} alt="" className="into-img" />
      </div>

      <div className="hero-content">
        <h3>Hello, It's Me</h3>
        <h1>Aminat Ameen</h1>
        <h1>
          And I'm a <span>Frontend Developer</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
          corrupti corporis inventore error hic voluptates. Velit enim, ratione
          amet possimus et voluptas minima adipisci quo quas reiciendis tempora
          accusamus earum?
        </p>

        <div className="social-media">
          <a href="#">
            <FaLinkedin size={20} style={{ color: "var(--main-color)f" }} />
          </a>
          <a href="#">
            <FaTwitter size={20} style={{ color: "var(--main-color)" }} />
          </a>
          <a href="#">
            <FaWhatsapp size={20} style={{ color: "var(--main-color)" }} />
          </a>
          <a href="#">
            <FaInstagram size={20} style={{ color: "var(--main-color)" }} />
          </a>
        </div>
        <a href="#" className="btn">
          Download CV{" "}
        </a>

        {/* <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link> */}
      </div>
    </section>
  );
};

export default Hero;
