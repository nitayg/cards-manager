import React from 'react';
import { STATUS_COLORS } from '../utils/constants';

const Card = ({ number, status, onClick, size }) => {
    const buttonStyle = {
        width: '100%',
        height: '100%',
        aspectRatio: '1',
        backgroundColor: STATUS_COLORS[status],
        border: '1px solid #D0D0D0',
        borderRadius: '4px',
        fontSize: `${Math.max(size * 0.4, 12)}px`,
        fontWeight: 'bold',
        padding: '0',
        margin: '0',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: status === 'missing' ? '#000' : '#fff',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation'
    };

    return (
        <button onClick={onClick} style={buttonStyle}>
            {number}
        </button>
    );
};

export default Card;