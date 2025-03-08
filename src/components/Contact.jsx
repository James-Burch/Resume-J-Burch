import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [formStatus, setFormStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("submitting");

        try {
            // Using Netlify's built-in form handling
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    "form-name": "contact",
                    ...formData
                }).toString()
            });

            if (response.ok) {
                setFormStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            console.error(error);
            setFormStatus("error");
        }
    };


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