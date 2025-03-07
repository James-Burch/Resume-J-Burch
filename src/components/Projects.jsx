import React from "react";
import ProjectCarousel from "./ProjectCarousel";

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <p className="section-description">
                    Over the past 13 months, I've built a variety of projects using different technologies.
                    Each project represents a milestone in my learning journey, from static websites to
                    full-stack applications and even machine learning models.
                </p>

                <ProjectCarousel />

                <div className="projects-footer">
                    <p>
                        These projects showcase my progression from basic HTML/CSS to complex frameworks and
                        machine learning. Each project presented unique challenges that helped me grow as a developer.
                    </p>
                    <a
                        href="https://github.com/James-Burch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        See more on GitHub →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;