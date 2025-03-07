import React from "react";

const About = () => {
    return (
        <div className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Hi! I'm James, a Full Stack Software Engineer with a passion for creating clean, responsive and
                            user-friendly websites. Over the past year, I've been on an exciting journey learning
                            the whole process of software development through various projects and technologies.
                        </p>
                        <p>
                            My journey began with Code Institute February 2024 where I started to learn HTML and CSS, gradually expanding to JavaScript, Python, Django and
                            now React. I believe in continuous learning and expanding to new technologies with each new project.
                        </p>
                        <p>
                            When I'm not coding, I enjoy going to the gym, playing golf and spending time outdoors hiking.
                        </p>
                    </div>
                    <div className="skills-container">
                        <h3>My Skills</h3>
                        <div className="skills-list">
                            <div className="skill-category">
                                <h4>Front-End</h4>
                                <ul>
                                    <li>HTML5 & CSS3</li>
                                    <li>JavaScript (ES6+)</li>
                                    <li>React</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                            <div className="skill-category">
                                <h4>Back-End</h4>
                                <ul>
                                    <li>Python</li>
                                    <li>Django</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </div>
                            <div className="skill-category">
                                <h4>Machine Learning</h4>
                                <ul>
                                    <li>Python</li>
                                    <li>Numpy</li>
                                    <li>SKLearn</li>
                                </ul>
                            </div>
                            <div className="skill-category">
                                <h4>Tools & Others</h4>
                                <ul>
                                    <li>Git & GitHub</li>
                                    <li>Responsive Design</li>
                                    <li>VS Code</li>
                                    <li>Heroku</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;