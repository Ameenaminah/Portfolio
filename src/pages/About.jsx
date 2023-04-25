import HeroImg from "../assets/mypix.jpg";
import "../pages/About.css";
import "../component/Hero.css";
const About = () => {
  return (
    <section className="about">
      <div className="about-img">
        <img src={HeroImg} alt="" />
      </div>

      <div className="about-content">
        <h2 className="about-heading heading">
          About <span>Me</span>
        </h2>
        <h3>Frontend Developer</h3>
        <p>
          Aminat is a biochemistry graduate with a passion for technology and
          healthcare. She is transitioning into frontend development and has a
          keen interest in healthcare tech. With her unique background and drive
          to learn, she believes she can make a valuable contribution to any
          team.
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
    </section>
  );
};

export default About;
