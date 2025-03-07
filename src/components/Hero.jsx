import React from "react";

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <h1>Hi, I'm James Burch</h1>
                    <h2>Full Stack Software Engineer</h2>
                    <p>
                        Insert Brief Description Here
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;