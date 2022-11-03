import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Info() {
  return (
    <section className="info">
      <h1 className="info--name">Aminat Morounmubo Ameen</h1>
      <h3 className="info--work">
        Biochemist || Medical Writer || Software Developer
      </h3>
      <p className="info--website">aminatameen.website</p>
      <div className="btn-container">
        <button className=" btn email-btn">
          {" "}
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="ameenaminatmorounmubo@gmail.com" target="_blank">
            Email
          </a>
        </button>
        <button className=" btn linkedIn-btn">
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
          <a
            href="https://www.linkedin.com/in/aminat-ameen-b69919255"
            target="_blank"
          >
            LinkedIn
          </a>
        </button>
      </div>
    </section>
  );
}

export default Info;
