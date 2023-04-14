import HeroImg from "../assets/intro-bg.jpeg";
import "../pages/About.css";
import "../component/Hero.css";
const About = () => {
  return (
    <section className="about">

      <div className="about-img">
        <img src={HeroImg} alt="" />
      </div>
      
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Frontend Developer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          sit? Ad aliquam neque ex eaque qui rerum libero! Esse sit fuga
          explicabo beatae deserunt dignissimos. Possimus iure explicabo quae
          debitis?
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
    </section>
  );
};

export default About;
