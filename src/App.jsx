// import './App.css'
// import Navbar from "./component/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./component/Layout";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    ScrollReveal({
      reset: true,
      duration: 3000,
      delay: 200,
      distance: "50px",
    });

    ScrollReveal().reveal(".hero-content, .heading", { origin: "top" });
    ScrollReveal().reveal(".contact form, .project-box", { origin: "bottom" });
    // ScrollReveal().reveal(".my-name, .about-img", { origin: "left" });
    // ScrollReveal().reveal(".hero-content p, .about-content", {
    //   origin: "right",
    // });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
