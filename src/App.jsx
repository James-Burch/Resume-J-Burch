import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <header>
        {/* Navbar will go here */}
      </header>
      
      <main>
        <section id="home">
          {/* Hero will go here */}
        </section>
        
        <section id="about">
          {/* About will go here */}
        </section>
        
        <section id="projects">
          {/* Projects will go here */}
        </section>
        
        <section id="contact">
          {/* Contact will go here */}
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