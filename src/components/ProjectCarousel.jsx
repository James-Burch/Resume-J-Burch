import React, { useState } from "react";

const ProjectCarousel = () => {
    // State to track the active project
    const [activeIndex, setActiveIndex] = useState(0);

    // Project data array for easier management
    const projects = [
        {
            id: 1,
            title: "Realing Cambs",
            description: "My first ever project! A fully static website made for a local sports massage business using HTML and CSS.",
            image: "/images/project1hp.png",
            liveSite: "https://james-burch.github.io/PP1-CI/",
            repository: "https://github.com/James-Burch/PP1-CI",
            technologies: ["HTML", "CSS"]
        },
        {
            id: 2,
            title: "High Octane",
            description: "An interactive JavaScript quiz game with dynamic content and score tracking functionality.",
            image: "/images/project2hp.png",
            liveSite: "https://james-burch.github.io/Project2-CI/",
            repository: "https://github.com/James-Burch/Project2-CI",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            id: 3,
            title: "Fitness Tracker App",
            description: "A small and simple fitness tracker app built using Python with a frontend terminal to showcase.",
            image: "/images/project3hp.png",
            liveSite: "https://fitness-tracker-pp3-ac30d4f35dab.herokuapp.com/",
            repository: "https://github.com/James-Burch/Project-3",
            technologies: ["Python", "Terminal UI"]
        },
        {
            id: 4,
            title: "Golf Booking Website",
            description: "A full-featured golf booking website built using Django and Bootstrap with user authentication and database integration.",
            image: "/images/project4hp.png",
            liveSite: "https://pp4-django-project-082841c8663e.herokuapp.com/",
            repository: "https://github.com/James-Burch/PP4-Django-Project",
            technologies: ["Django", "Python", "Bootstrap", "PostgreSQL"]
        },
        {
            id: 5,
            title: "House Price Prediction Model",
            description: "A machine learning model that predicts house prices based on various features like location, size, and amenities.",
            image: "/images/project5hp.png",
            liveSite: "#",
            repository: "https://github.com/James-Burch/",
            technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"]
        }
    ];

    // Function to handle manual navigation
    const navigate = (direction) => {
        if (direction === 'prev') {
            setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
        } else {
            setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
        }
    };

    return (
        <div className="project-carousel-container">
            <div className="project-carousel">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
                    >
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                {/* Front: Project Image */}
                                <div className="flip-card-front">
                                    <img
                                        src={project.image}
                                        className="project-img"
                                        alt={project.title}
                                    />
                                </div>
                                {/* Back: Project Details */}
                                <div className="flip-card-back">
                                    <h5>{project.title}</h5>
                                    <p>{project.description}</p>
                                    <div className="tech-tags">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="project-links">

                                        <a href={project.liveSite}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            Live Site
                                        </a>

                                        <a href={project.repository}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            Repository
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }

                {/* Navigation Controls */}
                <button
                    className="carousel-control carousel-control-prev"
                    onClick={() => navigate('prev')}
                    aria-label="Previous project"
                >
                    <span className="carousel-control-icon">←</span>
                </button>
                <button
                    className="carousel-control carousel-control-next"
                    onClick={() => navigate('next')}
                    aria-label="Next project"
                >
                    <span className="carousel-control-icon">→</span>
                </button>

                {/* Navigation Dots */}
                <div className="carousel-indicators">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-indicator ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>
            </div >
        </div >
    );
};

export default ProjectCarousel;