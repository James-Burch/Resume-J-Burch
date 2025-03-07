import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import "./index.css";


const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navigateToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      <Navbar activeSection={activeSection} onNavigate={navigateToSection} />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <h3>Contact</h3>
        </section>
      </main>

      <footer className="main-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} James Burch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;