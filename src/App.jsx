import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";
import "./index.css";

export default function App() {
  return (
    <main>
      <div className="info--img"></div>
      <Info />
      <About />
      <Interests />
      <Footer />
    </main>
  );
}
