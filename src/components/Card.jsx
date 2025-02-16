import React from 'react';
import { STATUS_COLORS } from '../utils/constants';

const Card = ({ number, status, onClick, size }) => {
    const buttonStyle = {
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: STATUS_COLORS[status],
        border: '1px solid #D0D0D0',
        fontSize: `${Math.max(size * 0.4, 12)}px`,
        fontWeight: 'bold',
        padding: '0',
        margin: '0',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        touchAction: 'manipulation',
        borderRadius: '4px',
        color: status === 'missing' ? '#000' : '#fff',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        minWidth: `${size}px`,
        maxWidth: `${size}px`
    };

    return (
        <button onClick={onClick} style={buttonStyle}>
            {number}
        </button>
    );
};

export default Card;