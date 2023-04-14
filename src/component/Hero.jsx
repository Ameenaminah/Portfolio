import "../component/Hero.css";
import HeroImg from "../assets/intro-bg.jpeg";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-intro">Hi, my name is</span>
        <h1>Aminat Ameen</h1>
        <h1>
          And I'm a <span>Frontend Developer</span>
        </h1>
        <p>
          Aminat is a biochemistry graduate with a passion for technology and
          healthcare. She is transitioning into frontend development and has a
          keen interest in healthcare tech. With her unique background and drive
          to learn, she believes she can make a valuable contribution to any
          team.
        </p>

        <div className="social-media">
          <a href="https://github.com/Ameenaminah" target="_blank">
            <FaGithub size={20} style={{ color: "var(--main-color)f" }} />
          </a>
          <a href="https://www.linkedin.com/in/ameenaminat/" target="_blank">
            <FaLinkedin size={20} style={{ color: "var(--main-color)" }} />
          </a>
          <a
            href="https://twitter.com/_AmeenAminat?t=Xeb6d7QXiHI2kNbGCQKWyw&s=03"
            target="_blank"
          >
            <FaTwitter size={20} style={{ color: "var(--main-color)" }} />
          </a>
          <a href="#" target="_blank">
            <FaInstagram size={20} style={{ color: "var(--main-color)" }} />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1XAvoG98PQYi6OLiwnqNVyRGOCJkzrmp9/view?usp=sharing"
          target="_blank"
          className="btn"
        >
          Download CV
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
