import React from 'react';

const SectionDivider = ({ style = 'gradient' }) => {
    const baseStyles = {
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        height: '1px',
        marginTop: '4rem',
        marginBottom: '4rem'
    };

    const dividerStyles = {
        gradient: {
            ...baseStyles,
            background: 'linear-gradient(to right, transparent, var(--border-color) 20%, var(--border-color) 80%, transparent)'
        },
        simple: {
            ...baseStyles,
            background: 'var(--border-color)'
        },
        dots: {
            ...baseStyles,
            height: '3px',
            background: 'repeating-linear-gradient(to right, var(--border-color), var(--border-color) 3px, transparent 3px, transparent 15px)'
        }
    };

    return <div style={dividerStyles[style] || dividerStyles.gradient}></div>;
};

export default SectionDivider;