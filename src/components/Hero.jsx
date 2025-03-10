import React from "react";
import NavLink from "./NavLink";

const Hero = ({ onNavigate }) => {
    return (
        <div className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <h1>Hi, I'm James Burch</h1>
                    <h2>Full Stack Software Engineer</h2>
                    <div className="hero-cta">
                        <NavLink
                            to="#projects"
                            className="btn btn-primary"
                            onNavigate={onNavigate}
                        >
                            View My Work
                        </NavLink>
                        <NavLink
                            to="#contact"
                            className="btn btn-outline"
                            onNavigate={onNavigate}
                        >
                            Contact Me
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;