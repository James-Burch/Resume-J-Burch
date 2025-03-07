import React, { useState, useEffect } from "react";

const Navbar = ({ activeSection, onNavigate }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (sectionId) => {
        onNavigate ? onNavigate(sectionId) : null;
        setMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="container navbar-container">
                <div className="navbar-logo" onClick={() => handleNavClick("home")}>
                    <span className="logo-text">JB</span>
                </div>

                {/* Mobile menu button */}
                <button
                    className={`menu-toggle ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Nav links */}
                <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
                    <li className={activeSection === "home" ? "active" : ""}>
                        <button onClick={() => handleNavClick("home")}>Home</button>
                    </li>
                    <li className={activeSection === "about" ? "active" : ""}>
                        <button onClick={() => handleNavClick("about")}>About</button>
                    </li>
                    <li className={activeSection === "projects" ? "active" : ""}>
                        <button onClick={() => handleNavClick("projects")}>Projects</button>
                    </li>
                    <li className={activeSection === "contact" ? "active" : ""}>
                        <button onClick={() => handleNavClick("contact")}>Contact</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;