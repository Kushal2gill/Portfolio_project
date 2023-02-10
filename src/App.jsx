import React from "react";
import "./App.css";
import Home from "./Section/Home/Home.jsx";
import About from "./Section/About/About.jsx";
import Experience from "./Section/Experience/Experience";
import Work from "./Section/Work/Work";
import Contact from "./Section/Contact/Contact";
import ContactBar from "./Component/ContactBar/ContactBar";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Fade from "react-reveal/Fade";
function App() {
  return (
    <main className="main">
      <Navbar />
      <div className="app_section_container">
        <Fade left>
          <Home />
        </Fade>
        <Fade left>
          <About />
        </Fade>
        <Fade left>
          <Experience />
        </Fade>
        <Fade left>
          <Work />
        </Fade>
        <Fade left>
          <Contact />
        </Fade>
      </div>
      <ContactBar />
      <Footer />
    </main>
  );
}

export default App;
