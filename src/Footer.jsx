import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithubSquare,
  faInstagramSquare,
  faTwitterSquare,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a
          href="https://twitter.com/_AmeenAminat?t=A-9q_CEj0pdudquZLWLE7A&s=09"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
        </a>
        <a
          href="https://twitter.com/_AmeenAminat?t=A-9q_CEj0pdudquZLWLE7A&s=09"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
        </a>
        <a
          href="https://twitter.com/_AmeenAminat?t=A-9q_CEj0pdudquZLWLE7A&s=09"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
        </a>
        <a
          href="https://twitter.com/_AmeenAminat?t=A-9q_CEj0pdudquZLWLE7A&s=09"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithubSquare} size="2x" />
        </a>
        <a
          href="https://twitter.com/_AmeenAminat?t=A-9q_CEj0pdudquZLWLE7A&s=09"
          target="_blank"
        >
          <FontAwesomeIcon icon={faWhatsappSquare} size="2x" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
