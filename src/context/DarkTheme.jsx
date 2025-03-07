// src/context/DarkTheme.jsx
import React, { createContext, useState, useEffect } from 'react';

export const DarkThemeContext = createContext();

export const DarkThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check user's preferred theme on initial load
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark-mode');
        } else {
            // Check system preference if no stored preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(prefersDark);
            if (prefersDark) document.documentElement.classList.add('dark-mode');
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <DarkThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </DarkThemeContext.Provider>
    );
};