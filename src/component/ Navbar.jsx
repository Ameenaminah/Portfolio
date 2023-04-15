import { Link, NavLink } from "react-router-dom";
import "../component/NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { links } from "../data";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setLink(value);
  };
  const handleClick = () => setClick(!click);
  return (
    <header className={scrolled ? "header header-bg" : "header"}>
      <Link to="/" className="logo">
        Portfo<span>lio.</span>
      </Link>
      <nav className={click ? "navbar active" : "navbar"}>
        {links.map(({ id, link, to }) => (
          <NavLink
            to={to}
            key={id}
            onClick={handleClick}
            className={({ isActive }) => (isActive ? "activee" : "unactive")}
          >
            {link}
          </NavLink>
        ))}
      </nav>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </header>
  );
};

export default Navbar;
