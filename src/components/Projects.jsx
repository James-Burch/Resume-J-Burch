import React from "react";
import ModernProjectsGrid from "./ModernProjectsGrid";

const Projects = () => {
    return (
        <section id="projects" style={{ 
            width: '100%', 
            overflow: 'hidden',
            boxSizing: 'border-box'
        }}>
            <ModernProjectsGrid />
        </section>
    );
};

export default Projects;