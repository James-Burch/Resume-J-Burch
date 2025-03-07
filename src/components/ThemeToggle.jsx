// src/components/ThemeToggle.jsx
import React, { useContext } from 'react';
import { DarkThemeContext } from '../context/DarkTheme';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useContext(DarkThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDarkMode ? (
                <span className="theme-icon">☀️</span>
            ) : (
                <span className="theme-icon">🌙</span>
            )}
        </button>
    );
};

export default ThemeToggle;