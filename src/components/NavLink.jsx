import React from "react";

const NavLink = ({ 
    to, 
    children, 
    onNavigate, 
    className = "", 
    isButton = false 
}) => {
    const handleClick = (e) => {
        e.preventDefault();
        if (onNavigate) {
            onNavigate(to.replace("#", ""));
        }

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