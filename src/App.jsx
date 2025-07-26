import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import BackgroundShape from "./components/common/BackgroundShape";
import SectionDivider from "./components/common/SectionDivider";
import { DarkThemeProvider } from './context/DarkTheme';
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
    <DarkThemeProvider>
      <div className="app">
        <Navbar activeSection={activeSection} onNavigate={navigateToSection} />
        <main>
          <section id="home">
            <Hero onNavigate={navigateToSection} />
          </section>

          <section id="about" style={{ position: "relative" }}>
            {/* About section shapes */}
            <BackgroundShape 
              type="square" 
              position="top-right" 
              customStyles={{ 
                top: "50px", 
                right: "8%", 
                opacity: "0.06",
                position: "absolute",
                zIndex: "0" 
              }} 
            />
            <BackgroundShape 
              type="donut" 
              position="bottom-left" 
              customStyles={{ 
                bottom: "80px", 
                left: "10%", 
                opacity: "0.06",
                position: "absolute",
                zIndex: "0" 
              }} 
            />
            <About />
          </section>

          <section id="projects" style={{ position: "relative" }}>
            {/* Projects section shapes */}
            <BackgroundShape 
              type="circle" 
              position="top-left" 
              customStyles={{ 
                top: "100px", 
                left: "7%", 
                width: "120px",
                height: "120px",
                opacity: "0.05",
                position: "absolute",
                zIndex: "0" 
              }} 
            />
            <BackgroundShape 
              type="triangle" 
              position="bottom-right" 
              customStyles={{ 
                bottom: "150px", 
                right: "5%", 
                opacity: "0.04",
                position: "absolute",
                zIndex: "0",
                transform: "rotate(180deg)" 
              }} 
            />
            <Projects />
          </section>

          <section id="contact" style={{ position: "relative" }}>
            {/* Contact section shapes */}
            <BackgroundShape 
              type="square" 
              position="top-right" 
              customStyles={{ 
                top: "80px", 
                right: "10%", 
                opacity: "0.05",
                position: "absolute",
                zIndex: "0",
                transform: "rotate(30deg)" 
              }} 
            />
            <BackgroundShape 
              type="circle" 
              position="bottom-left" 
              customStyles={{ 
                bottom: "100px", 
                left: "8%", 
                width: "150px",
                height: "150px",
                opacity: "0.06",
                position: "absolute",
                zIndex: "0" 
              }} 
            />
            <Contact />
          </section>
        </main>

        <footer className="main-footer" style={{ position: "relative" }}>
          {/* Footer shape */}
          <BackgroundShape 
            type="donut" 
            position="mid-right" 
            customStyles={{ 
              top: "50%", 
              right: "15%", 
              transform: "translateY(-50%)",
              width: "100px",
              height: "100px",
              opacity: "0.05",
              position: "absolute",
              zIndex: "0" 
            }} 
          />
          <div className="container">
            <p>&copy; {new Date().getFullYear()} James Burch. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </DarkThemeProvider>
  );
};

export default App;