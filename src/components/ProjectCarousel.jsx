import React, { useState } from "react";

const ProjectCarousel = () => {
    // State to track the active project
    const [activeIndex, setActiveIndex] = useState(0);
    // State to track which projects have expanded details
    const [expandedProjects, setExpandedProjects] = useState({});

    const projects = [
        {
            id: 1,
            title: "Realign Cambs",
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
            liveSite: "https://house-price-prediction-pp5-615997f77e23.herokuapp.com/",
            repository: "https://github.com/James-Burch/PP5-ML-PROJECT",
            technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"]
        },
        {
            id: 6,
            title: "Portfolio Website",
            description: "A portfolio website to showcase all of my projects and to show I can learn new technologies and apply the knowledge",
            image: "/images/project6hp.png",
            liveSite: "https://jamesburch.netlify.app",
            repository: "https://github.com/James-Burch/Resume-J-Burch",
            technologies: ["ReactJS", "CSS5", "EmailJS"]
        },
        {
            id: 7,
            title: "Refine Barbers",
            description: "A website built for a local barbers to allow their customers to book appointments and view different available services. Whilst allowing the barbers to have a dashboard to edit availability.",
            image: "/images/project7hp-refine.png",
            liveSite: "https://refinebarbers.netlify.app",
            repository: "https://github.com/James-Burch/Refine-Barbers",
            technologies: ["ReactJS", "Typescript", "MongoDB"]
        }
    ];

    // Function to handle manual navigation
    const navigate = (direction) => {
        if (direction === 'prev') {
            setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
        } else {
            setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
        }
        // Reset expanded state when navigating
        setExpandedProjects({});
    };

    // Toggle project details expansion
    const toggleProjectDetails = (projectId) => {
        setExpandedProjects(prev => ({
            ...prev,
            [projectId]: !prev[projectId]
        }));
    };

    return (
        <div className="project-carousel-container">
            <div className="project-carousel">
                <div className="carousel-indicators top-indicators">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-indicator ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>

                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
                    >
                        <div className="project-card">
                            <div className="project-card-image">
                                <img
                                    src={project.image}
                                    className="project-img"
                                    alt={project.title}
                                />
                            </div>

                            <div className="read-more-container">
                                <button
                                    className={`read-more-btn ${expandedProjects[project.id] ? 'expanded' : ''}`}
                                    onClick={() => toggleProjectDetails(project.id)}
                                    aria-expanded={expandedProjects[project.id] || false}
                                    aria-label={expandedProjects[project.id] ? "Hide details" : "Read more"}
                                >
                                    <span className="read-more-icon">
                                        {expandedProjects[project.id] ? "▲▲▲" : "▼▼▼"}
                                    </span>
                                    <span className="read-more-text">
                                        {expandedProjects[project.id] ? "Read Less" : "Read More"}
                                    </span>
                                </button>
                            </div>

                            <div className="project-title-bar">
                                <h5>{project.title}</h5>
                            </div>

                            <div className="description-area">
                                {expandedProjects[project.id] ? (
                                    <div className="project-card-details">
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
                                                className="project-link live-site-link"
                                            >
                                                Live Site
                                            </a>
                                            <a href={project.repository}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link repo-link"
                                            >
                                                Repository
                                            </a>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="empty-description"></div>
                                )}
                            </div>
                        </div>

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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectCarousel;