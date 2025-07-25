import React from "react";
import ModernProjectsGrid from "./ModernProjectsGrid";

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <ModernProjectsGrid />

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