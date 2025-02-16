import React from 'react';
import { STATUS_COLORS } from '../utils/constants';

const Card = ({ number, status, onClick }) => {
  const buttonStyle = {
    width: '32px',
    height: '32px',
    backgroundColor: STATUS_COLORS[status],
    border: '1px solid #D0D0D0',
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '0',
    margin: '1px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    touchAction: 'manipulation',
    borderRadius: '4px',
    color: status === 'missing' ? '#000' : '#fff',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent'
  };

  return (
    <button
      onClick={() => onClick(number)}
      style={buttonStyle}
    >
      {number}
    </button>
  );
};

export default Card;