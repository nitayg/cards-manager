import React from 'react';
import { STATUS_COLORS } from '../utils/constants';

const Card = ({ number, status, onClick, size, isSelected }) => {
    const buttonStyle = {
        width: '100%',
        height: '100%',
        aspectRatio: '1',
        backgroundColor: isSelected ? '#4A5568' : STATUS_COLORS[status],
        border: isSelected ? '2px solid #2D3748' : '1px solid #D0D0D0',
        borderRadius: '4px',
        fontSize: `${Math.max(size * 0.4, 12)}px`,
        fontWeight: 'bold',
        padding: '0',
        margin: '0',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: isSelected || status !== 'missing' ? '#fff' : '#000',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation',
        transition: 'all 0.2s'
    };

    return (
        <button onClick={onClick} style={buttonStyle}>
            {number}
        </button>
    );
};

export default Card;