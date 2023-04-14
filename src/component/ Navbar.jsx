import { Link } from "react-router-dom";
import "../component/NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // const [color, setColor] = useState(false);

  // const changeColor = () => {
  //   if (window.scrollY >= 100) {
  //     setColor(true);
  //   } else {
  //     setColor(false);
  //   }
  // };
  // window.addEventListener("scroll", changeColor);

  // useEffect(() => {
  //   const changeColor = () => {
  //     if (window.scrollY >= 100) {
  //       setColor(true);
  //     } else {
  //       setColor(false);
  //     }
  //   };
  //   window.addEventListener("scroll", changeColor);
  //   return () => window.removeEventListener("scroll", changeColor);
  // }, []);

  // className={color ? "header header-bg" : "header"}

  return (
    <header className="header">
      <Link to="/" className="logo">
        Portfo<span>lio.</span>
      </Link>
      <nav className={click ? 'navbar active' : 'navbar'}>
        <Link to="/" className="activee">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact</Link>
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
