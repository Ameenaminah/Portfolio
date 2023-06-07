import "../component/Hero.css";
import HeroImg from "../assets/images/intro-bg.jpeg";
import { Link } from "react-router-dom";

import Typed from "typed.js";
import { useEffect } from "react";
import {
  FaBars,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Hero = () => {
  // const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: ["Frontend Developer", "Biochemist", "Writer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <span className="hero-intro">Hi, my name is</span>
        <h1 className="my-name">Aminat Ameen</h1>
        <h1>
          And I'm a <span className="multiple-text"></span>
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
          <a href="mailto:ameenaminatmorounmubo@gmail.com" target="_blank">
            <FaEnvelope size={20} style={{ color: "var(--main-color)" }} />
          </a>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          className="btn"
          download="Aminat Ameen CV"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
