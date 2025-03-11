import React from 'react';

const BackgroundShape = ({ type, position, customStyles = {} }) => {
    // Base styles for all shapes
    const baseStyle = {
        position: 'absolute',
        zIndex: '-1',
        opacity: '0.05',
        pointerEvents: 'none',
        ...customStyles
    };

    // Define different shapes
    const getShapeStyles = () => {
        switch (type) {
            case 'circle':
                return {
                    ...baseStyle,
                    borderRadius: '50%',
                    background: 'var(--primary-color)',
                    width: '250px',
                    height: '250px'
                };
            case 'square':
                return {
                    ...baseStyle,
                    width: '200px',
                    height: '200px',
                    background: 'var(--primary-color)',
                    transform: 'rotate(45deg)'
                };
            case 'triangle':
                return {
                    ...baseStyle,
                    width: '0',
                    height: '0',
                    borderLeft: '120px solid transparent',
                    borderRight: '120px solid transparent',
                    borderBottom: '200px solid var(--primary-color)'
                };
            case 'donut':
                return {
                    ...baseStyle,
                    borderRadius: '50%',
                    border: '25px solid var(--primary-color)',
                    width: '180px',
                    height: '180px'
                };
            default:
                return baseStyle;
        }
    };

    // Define position styles
    const getPositionStyles = () => {
        switch (position) {
            case 'top-right':
                return { top: '50px', right: '5%' };
            case 'top-left':
                return { top: '100px', left: '5%' };
            case 'bottom-right':
                return { bottom: '100px', right: '5%' };
            case 'bottom-left':
                return { bottom: '100px', left: '5%' };
            case 'mid-right':
                return { top: '50%', right: '8%', transform: 'translateY(-50%)' };
            case 'mid-left':
                return { top: '40%', left: '3%' };
            default:
                return {};
        }
    };

    const combinedStyles = {
        ...getShapeStyles(),
        ...getPositionStyles()
    };

    return <div style={combinedStyles}></div>;
};

export default BackgroundShape;