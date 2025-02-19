import React from 'react';
import { STATUS_COLORS } from '../utils/constants';

const Card = ({ number, status, onClick, size, isSelected }) => {
    const buttonStyle = {
        width: '100%',
        height: '100%',
        aspectRatio: '1',
        backgroundColor: isSelected ? '#4A5568' : STATUS_COLORS[status],
        border: status === 'missing' ? '1px solid #E2E8F0' : 'none',
        borderRadius: '12px',
        fontSize: `${Math.max(size * 0.3, 16)}px`,
        fontWeight: '500',
        padding: '0',
        margin: '0',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // צבע טקסט דינמי - שחור על רקע לבן, לבן על שאר הצבעים
        color: status === 'missing' && !isSelected ? '#1a1a1a' : '#FFFFFF',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation',
        transition: 'all 0.2s',
        boxShadow: isSelected ? '0 0 0 2px #4A5568' : 'none'
    };

    return (
        <button onClick={onClick} style={buttonStyle}>
            {number}
        </button>
    );
};

export default Card;