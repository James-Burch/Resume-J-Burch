import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";

const Hero = ({ onNavigate }) => {
    const [currentRole, setCurrentRole] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const roles = [
        "Full Stack Software Engineer",
        "React Developer",
        "Python Specialist",
        "Problem Solver",
        "Your Next Developer 🚀"
    ];

    const skills = ["React", "Python", "JavaScript", "Django", "MongoDB", "PostgreSQL"];

    useEffect(() => {
        // Trigger entrance animations
        setTimeout(() => setIsLoaded(true), 100);

        // Rotating role text
        const roleInterval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);

        // Mouse movement for interactive background
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            clearInterval(roleInterval);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

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

                    @keyframes fadeInLeft {
                        from {
                            opacity: 0;
                            transform: translateX(-30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }

                    @keyframes fadeInRight {
                        from {
                            opacity: 0;
                            transform: translateX(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }

                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                    }

                    @keyframes pulse {
                        0%, 100% { opacity: 0.3; }
                        50% { opacity: 0.8; }
                    }

                    @keyframes typing {
                        from { width: 0; }
                        to { width: 100%; }
                    }

                    @keyframes blink {
                        0%, 50% { border-color: transparent; }
                        51%, 100% { border-color: var(--primary-color); }
                    }

                    .enhanced-hero-section {
                        position: relative;
                        overflow: hidden;
                    }

                    .hero-background-effects {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        pointer-events: none;
                        z-index: 1;
                    }

                    .floating-element {
                        position: absolute;
                        font-family: 'Courier New', monospace;
                        color: var(--primary-color);
                        opacity: 0.1;
                        font-size: 0.9rem;
                        animation: float 6s ease-in-out infinite;
                        user-select: none;
                    }

                    .interactive-bg {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        opacity: 0.03;
                        transition: all 0.3s ease;
                        pointer-events: none;
                    }

                    .enhanced-hero-content {
                        position: relative;
                        z-index: 2;
                    }

                    .hero-title-enhanced {
                        animation: ${isLoaded ? 'fadeInUp 1s ease 0.2s both' : 'none'};
                        position: relative;
                        margin-bottom: 1rem;
                    }

                    .hero-title-enhanced h1 {
                        background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        position: relative;
                        display: inline-block;
                    }

                    .hero-title-enhanced::after {
                        content: '';
                        position: absolute;
                        bottom: -10px;
                        left: 0;
                        width: ${isLoaded ? '100%' : '0%'};
                        height: 3px;
                        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
                        transition: width 1.5s ease 0.5s;
                        border-radius: 2px;
                    }

                    .hero-role-container {
                        height: 3rem;
                        display: flex;
                        align-items: center;
                        margin-bottom: 2rem;
                        animation: ${isLoaded ? 'fadeInLeft 1s ease 0.4s both' : 'none'};
                    }

                    .hero-role-text {
                        font-size: 2rem;
                        font-weight: 600;
                        color: var(--text-color);
                        position: relative;
                        white-space: nowrap;
                        overflow: hidden;
                        border-right: 3px solid var(--primary-color);
                        animation: blink 1s infinite;
                        transition: all 0.5s ease;
                    }

                    .hero-description {
                        animation: ${isLoaded ? 'fadeInUp 1s ease 0.6s both' : 'none'};
                        margin-bottom: 2rem;
                    }

                    .hero-description p {
                        font-size: 1.2rem;
                        line-height: 1.6;
                        color: var(--text-color);
                        opacity: 0.9;
                        margin-bottom: 1rem;
                    }

                    .hero-skills {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 0.75rem;
                        margin-bottom: 2rem;
                        animation: ${isLoaded ? 'fadeInUp 1s ease 0.8s both' : 'none'};
                    }

                    .skill-tag {
                        background: rgba(0, 112, 243, 0.1);
                        color: var(--primary-color);
                        padding: 0.5rem 1rem;
                        border-radius: 25px;
                        font-size: 0.9rem;
                        font-weight: 500;
                        border: 1px solid rgba(0, 112, 243, 0.2);
                        transition: all 0.3s ease;
                        cursor: pointer;
                        animation: fadeInUp 1s ease both;
                    }

                    .skill-tag:hover {
                        background: var(--primary-color);
                        color: white;
                        transform: translateY(-2px);
                        box-shadow: 0 4px 12px rgba(0, 112, 243, 0.3);
                    }

                    .enhanced-hero-cta {
                        animation: ${isLoaded ? 'fadeInRight 1s ease 1s both' : 'none'};
                    }

                    .enhanced-hero-cta .btn {
                        position: relative;
                        overflow: hidden;
                        transition: all 0.3s ease;
                        margin-right: 1rem;
                        margin-bottom: 1rem;
                    }

                    .enhanced-hero-cta .btn::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                        transition: left 0.5s ease;
                    }

                    .enhanced-hero-cta .btn:hover::before {
                        left: 100%;
                    }

                    .enhanced-hero-cta .btn:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 8px 20px rgba(0, 112, 243, 0.3);
                    }

                    .scroll-indicator {
                        position: absolute;
                        bottom: 2rem;
                        left: 50%;
                        transform: translateX(-50%);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        color: var(--text-color);
                        opacity: 0.7;
                        animation: ${isLoaded ? 'fadeInUp 1s ease 1.2s both' : 'none'};
                    }

                    .scroll-indicator span {
                        font-size: 0.9rem;
                        margin-bottom: 0.5rem;
                    }

                    .scroll-arrow {
                        width: 20px;
                        height: 20px;
                        border-right: 2px solid var(--primary-color);
                        border-bottom: 2px solid var(--primary-color);
                        transform: rotate(45deg);
                        animation: float 2s ease-in-out infinite;
                    }

                    @media (max-width: 768px) {
                        .hero-role-text {
                            font-size: 1.5rem;
                        }
                        
                        .hero-description p {
                            font-size: 1rem;
                        }
                        
                        .hero-skills {
                            justify-content: center;
                        }
                        
                        .enhanced-hero-cta {
                            text-align: center;
                        }
                        
                        .enhanced-hero-cta .btn {
                            width: 100%;
                            margin-right: 0;
                            margin-bottom: 1rem;
                        }
                        
                        .floating-element {
                            font-size: 0.7rem;
                        }
                    }
                `}
            </style>

            <div className="hero-section enhanced-hero-section">
                {/* Interactive Background Effects */}
                <div className="hero-background-effects">
                    <div
                        className="interactive-bg"
                        style={{
                            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--primary-color) 0%, transparent 50%)`
                        }}
                    />

                    {/* Floating Code Elements */}
                    {[
                        { text: "const skills = ['React', 'Python'];", top: '15%', left: '10%', delay: '0s' },
                        { text: "function buildAmazingThings() {", top: '25%', right: '15%', delay: '1s' },
                        { text: "  return innovation + passion;", top: '70%', left: '20%', delay: '2s' },
                        { text: "}", top: '60%', right: '10%', delay: '3s' },
                        { text: "// Always learning, always growing", top: '80%', right: '25%', delay: '4s' }
                    ].map((element, index) => (
                        <div
                            key={index}
                            className="floating-element"
                            style={{
                                top: element.top,
                                left: element.left,
                                right: element.right,
                                animationDelay: element.delay,
                                transform: `rotate(${-5 + index * 2}deg)`
                            }}
                        >
                            {element.text}
                        </div>
                    ))}
                </div>

                <div className="container">
                    <div className="hero-content enhanced-hero-content">
                        <div className="hero-title-enhanced">
                            <h1>James Burch</h1>
                        </div>

                        <div className="hero-role-container">
                            <h2 className="hero-role-text">
                                {roles[currentRole]}
                            </h2>
                        </div>

                        <div className="hero-description">
                            <p>
                                Passionate about creating innovative solutions and bringing ideas to life through code.
                            </p>
                            <p>
                                <strong>13+ months</strong> of intensive learning • <strong>8 projects</strong> built • Ready to make an impact
                            </p>
                        </div>

                        <div className="hero-skills">
                            {skills.map((skill, index) => (
                                <span
                                    key={skill}
                                    className="skill-tag"
                                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="hero-cta enhanced-hero-cta">
                            <NavLink
                                to="#projects"
                                className="btn btn-primary"
                                onNavigate={onNavigate}
                            >
                                🚀 View My Work
                            </NavLink>
                            <NavLink
                                to="#contact"
                                className="btn btn-outline"
                                onNavigate={onNavigate}
                            >
                                💼 Contact Me
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <span>Scroll to explore</span>
                    <div className="scroll-arrow"></div>
                </div>
            </div>
        </>
    );
};

export default Hero;