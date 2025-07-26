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

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !event.target.closest('.navbar')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [menuOpen]);

    // Enhanced handleNavClick - closes menu AND navigates
    const handleNavClick = (sectionId) => {
        setMenuOpen(false); // Close the mobile menu
        
        // Small delay to allow menu close animation, then navigate
        setTimeout(() => {
            if (onNavigate) {
                onNavigate(sectionId);
            }
        }, 100);
    };

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="container navbar-container">
                <div className="navbar-logo">
                    <NavLink 
                        to="#home" 
                        onNavigate={onNavigate}
                        onMobileMenuClose={() => setMenuOpen(false)}
                    >
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
                        <NavLink 
                            to="#home" 
                            onNavigate={onNavigate} 
                            onMobileMenuClose={() => setMenuOpen(false)}
                            isButton
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={activeSection === "about" ? "active" : ""}>
                        <NavLink 
                            to="#about" 
                            onNavigate={onNavigate} 
                            onMobileMenuClose={() => setMenuOpen(false)}
                            isButton
                        >
                            About
                        </NavLink>
                    </li>
                    <li className={activeSection === "projects" ? "active" : ""}>
                        <NavLink 
                            to="#projects" 
                            onNavigate={onNavigate} 
                            onMobileMenuClose={() => setMenuOpen(false)}
                            isButton
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li className={activeSection === "contact" ? "active" : ""}>
                        <NavLink 
                            to="#contact" 
                            onNavigate={onNavigate} 
                            onMobileMenuClose={() => setMenuOpen(false)}
                            isButton
                        >
                            Contact
                        </NavLink>
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