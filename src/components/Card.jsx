// Card.jsx מעודכן
import React from 'react';
import { STATUS_COLORS } from '../utils/constants';

const Card = ({ number, status, onClick, size, isSelected }) => {
    // הגבלת גודל מינימלי ומקסימלי לקלף
    const constrainedSize = Math.min(Math.max(size, 24), 80);
    
    // התאמת גודל הפונט לפי גודל הקלף
    const fontSize = constrainedSize <= 30 ? 
                      Math.max(constrainedSize * 0.45, 10) : 
                      Math.max(constrainedSize * 0.35, 14);
    
    const buttonStyle = {
        width: '100%',
        height: '100%',
        aspectRatio: '1',
        backgroundColor: isSelected ? '#4A5568' : STATUS_COLORS[status],
        border: status === 'missing' ? '1px solid #E2E8F0' : 'none',
        borderRadius: constrainedSize <= 30 ? '6px' : '8px',
        fontSize: `${fontSize}px`,
        fontWeight: constrainedSize <= 30 ? '700' : '500',
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
        // תוספת צל לטקסט לשיפור הקריאות
        textShadow: status !== 'missing' || isSelected ? '0px 0px 1px rgba(0,0,0,0.2)' : 'none',
        minWidth: '24px', // מניעת קריסה של קלפים קטנים מדי
        minHeight: '24px' // מניעת קריסה של קלפים קטנים מדי
    };

    return (
        <button onClick={onClick} style={buttonStyle}>
            {number}
        </button>
    );
};

export default Card;