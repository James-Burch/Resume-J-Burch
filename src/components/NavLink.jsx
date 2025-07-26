import React from "react";

const NavLink = ({
    to,
    children,
    onNavigate,
    onMobileMenuClose,
    className = "",
    isButton = false
}) => {
    const handleClick = (e) => {
        e.preventDefault();

        // Close mobile menu first (if function provided)
        if (onMobileMenuClose) {
            onMobileMenuClose();
        }

        // Navigate using the onNavigate prop
        if (onNavigate) {
            onNavigate(to.replace("#", ""));
        }

        // Fallback: direct scroll to element
        const element = document.getElementById(to.replace("#", ""));
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };


    if (isButton) {
        return (
            <button
                onClick={handleClick}
                className={className}
            >
                {children}
            </button>
        );
    }

    return (
        <a
            href={to}
            className={className}
            onClick={handleClick}
        >
            {children}
        </a>
    );
};

export default NavLink;