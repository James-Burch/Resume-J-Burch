import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-description">
                    I'm currently looking for new opportunities. Whether you want a website building for your buisiness to take the next step up
                    or if you believe I would be a great candidate for a position you have.
                </p>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <h3>Contact Information</h3>
                            <p>Feel free to reach out through any of these channels:</p>

                            <div className="contact-links">
                                <a href="mailto:james@jamesburch.co.uk" className="contact-link">
                                    <span className="contact-icon">  <FontAwesomeIcon icon={faEnvelope} />
                                    </span> james@jamesburch.co.uk
                                </a>
                                <a href="https://linkedin.com/in/james-burch123" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <span className="contact-icon">  <FontAwesomeIcon icon={faLinkedin} />
                                    </span> LinkedIn
                                </a>
                                <a href="https://github.com/James-Burch" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <span className="contact-icon">  <FontAwesomeIcon icon={faGithub} />
                                    </span> GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact