import React, { useState } from "react";

const ModernProjectsGrid = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "Realign Cambs",
            description: "My first ever project! A fully static website made for a local sports massage business using HTML and CSS.",
            image: "/images/project1hp.png",
            liveSite: "https://james-burch.github.io/PP1-CI/",
            repository: "https://github.com/James-Burch/PP1-CI",
            technologies: ["HTML", "CSS"],
            category: "frontend",
            featured: false
        },
        {
            id: 2,
            title: "High Octane",
            description: "An interactive JavaScript quiz game with dynamic content and score tracking functionality.",
            image: "/images/project2hp.png",
            liveSite: "https://james-burch.github.io/Project2-CI/",
            repository: "https://github.com/James-Burch/Project2-CI",
            technologies: ["HTML", "CSS", "JavaScript"],
            category: "frontend",
            featured: false
        },
        {
            id: 3,
            title: "Fitness Tracker App",
            description: "A small and simple fitness tracker app built using Python with a frontend terminal to showcase.",
            image: "/images/project3hp.png",
            liveSite: "https://fitness-tracker-pp3-ac30d4f35dab.herokuapp.com/",
            repository: "https://github.com/James-Burch/Project-3",
            technologies: ["Python", "Terminal UI"],
            category: "backend",
            featured: false
        },
        {
            id: 4,
            title: "Golf Booking Website",
            description: "A full-featured golf booking website built using Django and Bootstrap with user authentication and database integration.",
            image: "/images/project4hp.png",
            liveSite: "https://pp4-django-project-082841c8663e.herokuapp.com/",
            repository: "https://github.com/James-Burch/PP4-Django-Project",
            technologies: ["Django", "Python", "Bootstrap", "PostgreSQL"],
            category: "fullstack",
            featured: true
        },
        {
            id: 5,
            title: "House Price Prediction Model",
            description: "A machine learning model that predicts house prices based on various features like location, size, and amenities.",
            image: "/images/project5hp.png",
            liveSite: "https://house-price-prediction-pp5-615997f77e23.herokuapp.com/",
            repository: "https://github.com/James-Burch/PP5-ML-PROJECT",
            technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
            category: "ml",
            featured: true
        },
        {
            id: 6,
            title: "Portfolio Website",
            description: "A portfolio website to showcase all of my projects and to show I can learn new technologies and apply the knowledge",
            image: "/images/project6hp.png",
            liveSite: "https://jamesburch.netlify.app",
            repository: "https://github.com/James-Burch/Resume-J-Burch",
            technologies: ["ReactJS", "CSS", "EmailJS"],
            category: "frontend",
            featured: false
        },
        {
            id: 7,
            title: "Refine Barbers",
            description: "A website built for a local barbers to allow their customers to book appointments and view different available services. Whilst allowing the barbers to have a dashboard to edit availability.",
            image: "/images/project7hp-refine.png",
            liveSite: "https://refinebarbers.netlify.app",
            repository: "https://github.com/James-Burch/Refine-Barbers",
            technologies: ["ReactJS", "TypeScript", "MongoDB"],
            category: "fullstack",
            featured: true
        },
        {
            id: 8,
            title: "Mortgage Advisor Site",
            description: "Professional mortgage advisory website with modern design and client-focused features.",
            image: "/images/project8hp.png",
            liveSite: "https://ak-site.netlify.app",
            repository: "https://github.com/James-Burch/AK-site",
            technologies: ["ReactJS", "TypeScript"],
            category: "frontend",
            featured: true
        }
    ];

    const categories = [
        { id: 'all', label: 'All Projects', count: projects.length },
        { id: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length },
        { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
        { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
        { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
        { id: 'ml', label: 'Machine Learning', count: projects.filter(p => p.category === 'ml').length }
    ];

    const filteredProjects = selectedFilter === 'all' 
        ? projects 
        : selectedFilter === 'featured'
        ? projects.filter(project => project.featured)
        : projects.filter(project => project.category === selectedFilter);

    const getTechColor = (tech) => {
        const colors = {
            'HTML': '#e34c26',
            'CSS': '#1572b6',
            'JavaScript': '#f7df1e',
            'ReactJS': '#61dafb',
            'TypeScript': '#3178c6',
            'Python': '#3776ab',
            'Django': '#092e20',
            'MongoDB': '#47a248',
            'PostgreSQL': '#336791',
            'Bootstrap': '#7952b3',
            'Scikit-learn': '#f7931e',
            'Pandas': '#150458',
            'NumPy': '#013243',
            'EmailJS': '#ff6b35',
            'Terminal UI': '#4a4a4a'
        };
        return colors[tech] || '#6b7280';
    };

    return (
        <div className="modern-projects-container">
            <style>
                {`
                .modern-projects-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem;
                }

                .projects-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .projects-title {
                    font-size: 2.5rem;
                    font-weight: bold;
                    color: var(--primary-color);
                    margin-bottom: 1rem;
                }

                .projects-subtitle {
                    font-size: 1.1rem;
                    color: var(--text-color);
                    opacity: 0.8;
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .filter-tabs {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-bottom: 3rem;
                    padding: 0.5rem;
                    background: var(--card-bg);
                    border-radius: 12px;
                    border: 1px solid var(--border-color);
                }

                .filter-tab {
                    padding: 0.75rem 1.5rem;
                    border: none;
                    background: transparent;
                    color: var(--text-color);
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-weight: 500;
                    white-space: nowrap;
                }

                .filter-tab:hover {
                    background: rgba(0, 112, 243, 0.1);
                    color: var(--primary-color);
                }

                .filter-tab.active {
                    background: var(--primary-color);
                    color: white;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(0, 112, 243, 0.3);
                }

                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 2rem;
                    margin-bottom: 3rem;
                }

                .project-card {
                    background: var(--card-bg);
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid var(--border-color);
                    transition: all 0.3s ease;
                    position: relative;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .project-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                    border-color: var(--primary-color);
                }

                .project-card.featured::before {
                    content: "⭐ Featured";
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: linear-gradient(45deg, #ffd700, #ffed4e);
                    color: #000;
                    padding: 0.25rem 0.75rem;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: bold;
                    z-index: 2;
                    box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
                }

                .project-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    background: #f0f0f0;
                    transition: transform 0.3s ease;
                }

                .project-card:hover .project-image {
                    transform: scale(1.05);
                }

                .project-content {
                    padding: 1.5rem;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .project-title {
                    font-size: 1.25rem;
                    font-weight: bold;
                    color: var(--text-color);
                    margin-bottom: 0.75rem;
                }

                .project-description {
                    color: var(--text-color);
                    opacity: 0.8;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    flex: 1;
                }

                .project-tech {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-bottom: 1.5rem;
                }

                .tech-tag {
                    padding: 0.25rem 0.75rem;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 500;
                    color: white;
                    transition: transform 0.2s ease;
                }

                .tech-tag:hover {
                    transform: scale(1.05);
                }

                .project-links {
                    display: flex;
                    gap: 1rem;
                }

                .project-link {
                    flex: 1;
                    padding: 0.75rem;
                    border-radius: 8px;
                    text-decoration: none;
                    text-align: center;
                    font-weight: bold;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                }

                .live-link {
                    background: var(--primary-color);
                    color: white;
                }

                .live-link:hover {
                    background: var(--secondary-color);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 112, 243, 0.3);
                }

                .repo-link {
                    background: var(--card-bg);
                    color: var(--text-color);
                    border: 2px solid var(--border-color);
                }

                .repo-link:hover {
                    border-color: var(--primary-color);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .projects-stats {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin-top: 3rem;
                    padding: 2rem;
                    background: var(--card-bg);
                    border-radius: 12px;
                    border: 1px solid var(--border-color);
                }

                .stat-item {
                    text-align: center;
                }

                .stat-number {
                    font-size: 2rem;
                    font-weight: bold;
                    color: var(--primary-color);
                    display: block;
                }

                .stat-label {
                    color: var(--text-color);
                    opacity: 0.8;
                    font-size: 0.9rem;
                }

                @media (max-width: 768px) {
                    .projects-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                    
                    .filter-tabs {
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    .filter-tab {
                        width: 100%;
                        text-align: center;
                    }
                }
                `}
            </style>

            <div className="projects-header">
                <h2 className="projects-title">My Projects</h2>
                <p className="projects-subtitle">
                    A showcase of my development journey from static websites to full-stack applications and machine learning models. Each project represents growth, learning, and problem-solving skills.
                </p>
            </div>

            <div className="filter-tabs">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`filter-tab ${selectedFilter === category.id ? 'active' : ''}`}
                        onClick={() => setSelectedFilter(category.id)}
                    >
                        {category.label} ({category.count})
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map(project => (
                    <div
                        key={project.id}
                        className={`project-card ${project.featured ? 'featured' : ''}`}
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                            onError={(e) => {
                                e.target.style.background = 'linear-gradient(45deg, #f0f0f0, #e0e0e0)';
                                e.target.style.display = 'flex';
                                e.target.style.alignItems = 'center';
                                e.target.style.justifyContent = 'center';
                                e.target.innerHTML = '📱 Project Preview';
                            }}
                        />
                        
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            
                            <div className="project-tech">
                                {project.technologies.map(tech => (
                                    <span
                                        key={tech}
                                        className="tech-tag"
                                        style={{ backgroundColor: getTechColor(tech) }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="project-links">
                                <a
                                    href={project.liveSite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link live-link"
                                >
                                    🌐 Live Site
                                </a>
                                <a
                                    href={project.repository}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link repo-link"
                                >
                                    📂 Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="projects-stats">
                <div className="stat-item">
                    <span className="stat-number">{projects.length}</span>
                    <span className="stat-label">Total Projects</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">{new Set(projects.flatMap(p => p.technologies)).size}</span>
                    <span className="stat-label">Technologies Used</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">2+</span>
                    <span className="stat-label">Years Learning</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Passion Driven</span>
                </div>
            </div>
        </div>
    );
};

export default ModernProjectsGrid;