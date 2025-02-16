import React from 'react';
import { STATUS_COLORS } from '../utils/constants';

const Card = ({ number, status, onClick }) => {
  const buttonStyle = {
    width: '36px',
    height: '20px',
    backgroundColor: STATUS_COLORS[status],
    border: '1px solid #D0D0D0',
    fontSize: '10px',
    fontWeight: 'bold',
    padding: '1px',
    margin: '0',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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