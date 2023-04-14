import "../component/Footer.css";
import "../pages/About.css";
import "../component/Hero.css";
import "../pages/Portfolio.css";
import "../pages/Contact.css";

import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2023 by Aminat | All Rights Reserved.</p>
      </div>
      <div className="footer-iconTop">
        <Link to="/">
          <FaArrowUp size={20} style={{ color: "var(--second-bg-color)" }} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
