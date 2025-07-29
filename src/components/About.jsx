import React, { useState, useEffect } from "react";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredSkill, setHoveredSkill] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const aboutSection = document.querySelector('.enhanced-about-section');
        if (aboutSection) {
            observer.observe(aboutSection);
        }

        return () => observer.disconnect();
    }, []);

    const skills = [
        {
            category: "Front-End",
            icon: "🎨",
            skills: [
                { name: "HTML5 & CSS3", level: 90, color: "#e34c26" },
                { name: "JavaScript (ES6+)", level: 85, color: "#f7df1e" },
                { name: "React", level: 80, color: "#61dafb" },
                { name: "Bootstrap", level: 75, color: "#7952b3" }
            ]
        },
        {
            category: "Back-End",
            icon: "⚙️",
            skills: [
                { name: "Python", level: 85, color: "#3776ab" },
                { name: "Django", level: 80, color: "#092e20" },
                { name: "PostgreSQL", level: 75, color: "#336791" }
            ]
        },
        {
            category: "Machine Learning",
            icon: "🤖",
            skills: [
                { name: "Python", level: 80, color: "#3776ab" },
                { name: "NumPy", level: 70, color: "#013243" },
                { name: "Scikit-Learn", level: 65, color: "#f7931e" }
            ]
        },
        {
            category: "Tools & Others",
            icon: "🛠️",
            skills: [
                { name: "Git & GitHub", level: 85, color: "#f05032" },
                { name: "Responsive Design", level: 90, color: "#0070f3" },
                { name: "VS Code", level: 85, color: "#007acc" },
                { name: "Heroku", level: 70, color: "#430098" }
            ]
        }
    ];

    return (
        <>
            <style>
                {`
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes skillBarFill {
                        from {
                            width: 0%;
                        }
                        to {
                            width: var(--target-width);
                        }
                    }

                    @keyframes float {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        33% { transform: translateY(-10px) rotate(2deg); }
                        66% { transform: translateY(5px) rotate(-1deg); }
                    }

                    .enhanced-about-section {
                        position: relative;
                        overflow: hidden;
                        background: var(--bg-color);
                        padding: 5rem 0;
                    }

                    .about-background-effects {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        pointer-events: none;
                        opacity: 0.1;
                        z-index: 1;
                    }

                    .floating-code-element {
                        position: absolute;
                        font-family: 'Courier New', monospace;
                        color: var(--primary-color);
                        font-size: 0.9rem;
                        animation: float 8s ease-in-out infinite;
                        user-select: none;
                    }

                    .geometric-shape {
                        position: absolute;
                        border: 1px solid var(--primary-color);
                        opacity: 0.1;
                        animation: float 12s ease-in-out infinite;
                    }

                    .about-content-enhanced {
                        position: relative;
                        z-index: 2;
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 4rem;
                        margin-top: 3rem;
                    }

                    .about-text-enhanced {
                        animation: ${isVisible ? 'fadeInUp 1s ease 0.2s both' : 'none'};
                    }

                    .about-text-enhanced h3 {
                        font-size: 2rem;
                        color: var(--primary-color);
                        margin-bottom: 1.5rem;
                        position: relative;
                    }

                    .about-text-enhanced h3::after {
                        content: '';
                        position: absolute;
                        bottom: -8px;
                        left: 0;
                        width: 60px;
                        height: 3px;
                        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
                        border-radius: 2px;
                    }

                    .about-text-enhanced p {
                        font-size: 1.1rem;
                        line-height: 1.8;
                        margin-bottom: 1.5rem;
                        color: var(--text-color);
                        opacity: 0.9;
                    }

                    .highlight-text {
                        color: var(--primary-color);
                        font-weight: 600;
                        position: relative;
                    }

                    .timeline-item {
                        display: flex;
                        align-items: center;
                        margin-bottom: 1rem;
                        padding: 1rem;
                        background: var(--card-bg);
                        border-radius: 8px;
                        border-left: 4px solid var(--primary-color);
                        transition: all 0.3s ease;
                    }

                    .timeline-item:hover {
                        transform: translateX(10px);
                        box-shadow: 0 4px 12px var(--card-shadow);
                    }

                    .timeline-icon {
                        font-size: 1.5rem;
                        margin-right: 1rem;
                    }

                    .skills-section-enhanced {
                        animation: ${isVisible ? 'fadeInUp 1s ease 0.4s both' : 'none'};
                    }

                    .skills-section-enhanced h3 {
                        font-size: 2rem;
                        color: var(--primary-color);
                        margin-bottom: 2rem;
                        text-align: center;
                    }

                    .skills-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                        gap: 2rem;
                    }

                    .skill-category-enhanced {
                        background: var(--card-bg);
                        padding: 2rem;
                        border-radius: 16px;
                        border: 1px solid var(--border-color);
                        transition: all 0.3s ease;
                        position: relative;
                        overflow: hidden;
                    }

                    .skill-category-enhanced:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 10px 30px var(--card-shadow);
                        border-color: var(--primary-color);
                    }

                    .skill-category-enhanced::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 4px;
                        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
                    }

                    .skill-category-header {
                        display: flex;
                        align-items: center;
                        margin-bottom: 1.5rem;
                    }

                    .skill-category-header h4 {
                        font-size: 1.3rem;
                        color: var(--text-color);
                        margin-left: 0.5rem;
                        font-weight: 600;
                    }

                    .skill-item {
                        margin-bottom: 1.5rem;
                    }

                    .skill-name {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 0.5rem;
                    }

                    .skill-name span {
                        font-weight: 500;
                        color: var(--text-color);
                    }

                    .skill-percentage {
                        font-size: 0.9rem;
                        color: var(--primary-color);
                        font-weight: 600;
                    }

                    .skill-bar {
                        height: 8px;
                        background: var(--border-color);
                        border-radius: 4px;
                        overflow: hidden;
                        position: relative;
                    }

                    .skill-bar-fill {
                        height: 100%;
                        border-radius: 4px;
                        transition: all 0.3s ease;
                        position: relative;
                        animation: ${isVisible ? 'skillBarFill 2s ease 0.5s both' : 'none'};
                    }

                    .skill-bar-fill::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                        animation: shimmer 2s infinite;
                    }

                    @keyframes shimmer {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                    }

                    .personal-interests {
                        grid-column: 1 / -1;
                        margin-top: 2rem;
                        text-align: center;
                        animation: ${isVisible ? 'fadeInUp 1s ease 0.6s both' : 'none'};
                    }

                    .interests-list {
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 1rem;
                        margin-top: 1rem;
                    }

                    .interest-tag {
                        background: var(--primary-color);
                        color: white;
                        padding: 0.7rem 1.5rem;
                        border-radius: 25px;
                        font-weight: 500;
                        transition: all 0.3s ease;
                        cursor: pointer;
                    }

                    .interest-tag:hover {
                        background: var(--secondary-color);
                        transform: translateY(-3px);
                        box-shadow: 0 4px 12px rgba(0, 112, 243, 0.3);
                    }

                    @media (max-width: 768px) {
                        .about-content-enhanced {
                            grid-template-columns: 1fr;
                            gap: 3rem;
                        }

                        .skills-grid {
                            grid-template-columns: 1fr;
                        }

                        .about-text-enhanced h3,
                        .skills-section-enhanced h3 {
                            font-size: 1.8rem;
                        }

                        .floating-code-element {
                            font-size: 0.7rem;
                        }
                    }
                `}
            </style>

            <div className="about-section enhanced-about-section">
                {/* Background Effects */}
                <div className="about-background-effects">
                    {/* Floating Code Elements */}
                    {[
                        { text: "class Developer:", top: "10%", left: "5%", delay: "0s" },
                        { text: "def learn_new_tech():", top: "20%", right: "10%", delay: "2s" },
                        { text: "  passion += 1", top: "70%", left: "8%", delay: "4s" },
                        { text: "return success", top: "80%", right: "15%", delay: "6s" },
                        { text: "# Always growing 🚀", top: "60%", right: "5%", delay: "8s" }
                    ].map((element, index) => (
                        <div
                            key={index}
                            className="floating-code-element"
                            style={{
                                top: element.top,
                                left: element.left,
                                right: element.right,
                                animationDelay: element.delay,
                                transform: `rotate(${-10 + index * 4}deg)`
                            }}
                        >
                            {element.text}
                        </div>
                    ))}

                    {/* Geometric Shapes */}
                    <div className="geometric-shape" style={{
                        top: "15%",
                        left: "80%",
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        animationDelay: "1s"
                    }} />
                    <div className="geometric-shape" style={{
                        top: "60%",
                        left: "5%",
                        width: "40px",
                        height: "40px",
                        animationDelay: "3s"
                    }} />
                    <div className="geometric-shape" style={{
                        top: "30%",
                        right: "20%",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        animationDelay: "5s"
                    }} />
                </div>

                <div className="container">
                    <h2 className="section-title">About Me</h2>

                    <div className="about-content-enhanced">
                        <div className="about-text-enhanced">
                            <h3>My Journey</h3>
                            <p>
                                Hi! I'm James, a <span className="highlight-text">Full Stack Software Engineer</span> with a passion for creating clean, responsive and user-friendly websites. Over the past year, I've been on an exciting journey learning the whole process of software development through various projects and technologies.
                            </p>

                            <div className="timeline-item">
                                <div className="timeline-icon">🎓</div>
                                <div>
                                    <strong>February 2024</strong> - Started my journey with Code Institute, learning HTML & CSS
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-icon">⚡</div>
                                <div>
                                    <strong>Growth Phase</strong> - Expanded to JavaScript, Python, Django and React
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-icon">🚀</div>
                                <div>
                                    <strong>Present</strong> - Built 8 projects and ready for new challenges
                                </div>
                            </div>

                            <p>
                                I believe in <span className="highlight-text">continuous learning</span> and expanding to new technologies with each new project. When I'm not coding, I enjoy going to the gym, playing golf and spending time outdoors hiking.
                            </p>
                        </div>

                        <div className="skills-section-enhanced">
                            <h3>My Skills</h3>
                            <div className="skills-grid">
                                {skills.map((category, categoryIndex) => (
                                    <div
                                        key={category.category}
                                        className="skill-category-enhanced"
                                        onMouseEnter={() => setHoveredSkill(category.category)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                    >
                                        <div className="skill-category-header">
                                            <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
                                            <h4>{category.category}</h4>
                                        </div>

                                        {category.skills.map((skill, skillIndex) => (
                                            <div key={skill.name} className="skill-item">
                                                <div className="skill-name">
                                                    <span>{skill.name}</span>
                                                    <span className="skill-percentage">{skill.level}%</span>
                                                </div>
                                                <div className="skill-bar">
                                                    <div
                                                        className="skill-bar-fill"
                                                        style={{
                                                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                                                            '--target-width': `${skill.level}%`,
                                                            width: isVisible ? `${skill.level}%` : '0%',
                                                            animationDelay: `${0.5 + categoryIndex * 0.2 + skillIndex * 0.1}s`
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            <div className="personal-interests">
                                <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.3rem' }}>
                                    When I'm not coding...
                                </h4>
                                <div className="interests-list">
                                    <div className="interest-tag">🏋️ Gym</div>
                                    <div className="interest-tag">⛳ Golf</div>
                                    <div className="interest-tag">🥾 Hiking</div>
                                    <div className="interest-tag">📚 Learning</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;