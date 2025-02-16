import React, { useState, useEffect } from 'react';
import Card from './Card';
import { TOTAL_CARDS, COLS_PER_ROW, STATUS_ORDER } from '../utils/constants';

const CardsGrid = () => {
  const [cards, setCards] = useState({});

  useEffect(() => {
    const initialCards = {};
    for (let i = 1; i <= TOTAL_CARDS; i++) {
      initialCards[i] = { status: 'missing' };
    }
    setCards(initialCards);
  }, []);

  const handleCardClick = (number) => {
    const currentStatus = cards[number].status;
    const currentIndex = STATUS_ORDER.indexOf(currentStatus);
    const newStatus = STATUS_ORDER[(currentIndex + 1) % STATUS_ORDER.length];

    setCards(prev => ({
      ...prev,
      [number]: { ...prev[number], status: newStatus }
    }));
  };

  const stats = Object.values(cards).reduce((acc, card) => {
    acc[card.status] = (acc[card.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div style={{ padding: '20px', direction: 'rtl' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {[...Array(Math.ceil(TOTAL_CARDS / COLS_PER_ROW))].map((_, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', gap: '2px' }}>
            {[...Array(COLS_PER_ROW)].map((_, colIndex) => {
              const number = rowIndex * COLS_PER_ROW + colIndex + 1;
              if (number <= TOTAL_CARDS) {
                return (
                  <Card
                    key={number}
                    number={number}
                    status={cards[number]?.status || 'missing'}
                    onClick={handleCardClick}
                  />
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        סטטיסטיקה: {stats.owned || 0} קלפים ברשותי,{' '}
        {stats.missing || 0} חסרים,{' '}
        {((stats.source1 || 0) + (stats.source2 || 0) + 
          (stats.source3 || 0) + (stats.source4 || 0))} בדרך
      </div>
    </div>
  );
};

export default CardsGrid;