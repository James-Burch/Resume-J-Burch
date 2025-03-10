import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import NavLink from "./NavLink";

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
        setMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="container navbar-container">
                <div className="navbar-logo">
                    <NavLink to="#home" onNavigate={onNavigate}>
                        <span className="logo-text">JB</span>
                    </NavLink>
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
                        <NavLink to="#home" onNavigate={onNavigate} isButton>Home</NavLink>
                    </li>
                    <li className={activeSection === "about" ? "active" : ""}>
                        <NavLink to="#about" onNavigate={onNavigate} isButton>About</NavLink>
                    </li>
                    <li className={activeSection === "projects" ? "active" : ""}>
                        <NavLink to="#projects" onNavigate={onNavigate} isButton>Projects</NavLink>
                    </li>
                    <li className={activeSection === "contact" ? "active" : ""}>
                        <NavLink to="#contact" onNavigate={onNavigate} isButton>Contact</NavLink>
                    </li>
                    <li>
                        <ThemeToggle />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;