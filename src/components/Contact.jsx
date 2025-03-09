import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus("submitting");

        emailjs.sendForm(
            'service_5s3mzio',
            'template_tnmbto8',
            form.current,
            'a_g18x1SZODHuiJY2'
        )
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setFormStatus("success");
                form.current.reset();
            }, (error) => {
                console.error('Email sending failed:', error.text);
                setFormStatus("error");
            });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-description">
                    I'm currently looking for new opportunities. Whether you want a website building for your business to take the next step up
                    or if you believe I would be a great candidate for a position you have.
                </p>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <h3>Contact Information</h3>
                            <p>Feel free to reach out through any of these channels:</p>

                            <div className="contact-links">
                                <a href="mailto:james@jamesburch.co.uk" className="contact-link">
                                    <span className="contact-icon">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span> james@jamesburch.co.uk
                                </a>
                                <a href="https://linkedin.com/in/james-burch123" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <span className="contact-icon">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </span> LinkedIn
                                </a>
                                <a href="https://github.com/James-Burch" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <span className="contact-icon">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </span> GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-container">
                        <h3>Send Me a Message</h3>
                        {formStatus === "success" ? (
                            <div className="form-success">
                                <p>Thanks for your message! I'll get back to you soon.</p>
                                <button onClick={() => setFormStatus(null)} className="btn btn-primary">
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form
                                ref={form}
                                onSubmit={handleSubmit}
                                className="contact-form"
                            >
                                <div className="form-group">
                                    <label htmlFor="user_name">Name</label>
                                    <input
                                        type="text"
                                        id="user_name"
                                        name="user_name"
                                        placeholder="James Burch"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="user_email">Email</label>
                                    <input
                                        type="email"
                                        id="user_email"
                                        name="user_email"
                                        placeholder="jamesburch@example.com"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Hi James, I have an idea for an app I think you would love to contribute to!..."
                                        rows="5"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={formStatus === "submitting"}
                                >
                                    {formStatus === "submitting" ? "Sending..." : "Send Message"}
                                </button>

                                {formStatus === "error" && (
                                    <p className="form-error">
                                        Something went wrong. Please try again or email me directly.
                                    </p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;