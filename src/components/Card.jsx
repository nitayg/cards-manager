// Card.jsx המעודכן עם התאמות למובייל
import React from 'react';
import { STATUS_COLORS } from '../utils/constants';

const Card = ({ number, status, onClick, size, isSelected }) => {
    // הקטנת גודל פונט ביחס לגודל הקלף
    const fontSize = size <= 32 ? Math.max(size * 0.35, 10) : Math.max(size * 0.3, 16);
    
    const buttonStyle = {
        width: '100%',
        height: '100%',
        aspectRatio: '1',
        backgroundColor: isSelected ? '#4A5568' : STATUS_COLORS[status],
        border: status === 'missing' ? '1px solid #E2E8F0' : 'none',
        borderRadius: '8px', // קצת יותר קטן במובייל
        fontSize: `${fontSize}px`,
        fontWeight: size <= 32 ? '700' : '500', // פונט בולט יותר במובייל
        padding: '0',
        margin: '0',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: status === 'missing' && !isSelected ? '#1a1a1a' : '#FFFFFF',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation',
        transition: 'all 0.2s',
        boxShadow: isSelected ? '0 0 0 2px #4A5568' : 'none',
        // משפר את קריאות הספרות במובייל
        textShadow: size <= 32 ? '0px 0px 1px rgba(0,0,0,0.2)' : 'none'
    };

    return (
        <button onClick={onClick} style={buttonStyle}>
            {number}
        </button>
    );
};

export default Card;