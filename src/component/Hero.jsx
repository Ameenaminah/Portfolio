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
