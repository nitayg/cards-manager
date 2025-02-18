import React, { useState, useEffect } from 'react';
import Card from './Card';
import CardDetails from './CardDetails';
import { TOTAL_CARDS, COLS_PER_ROW, STATUS_ORDER } from '../utils/constants';

const CardsGrid = () => {
  const [cards, setCards] = useState({});
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const initialCards = {};
    for (let i = 1; i <= TOTAL_CARDS; i++) {
      initialCards[i] = { number: i, status: 'missing' };
    }
    setCards(initialCards);
  }, []);

  const handleCardClick = (number) => {
    setSelectedCard(cards[number]);
  };

  const stats = Object.values(cards).reduce((acc, card) => {
    acc[card.status] = (acc[card.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Main Grid */}
      <div className="flex-1 p-4 overflow-auto">
        <div className="grid grid-cols-10 gap-1">
          {Object.values(cards).map((card) => (
            <Card
              key={card.number}
              number={card.number}
              status={card.status}
              onClick={() => handleCardClick(card.number)}
            />
          ))}
        </div>
        
        <div className="mt-4 text-center">
          סטטיסטיקה: {stats.owned || 0} קלפים ברשותי,{' '}
          {stats.missing || 0} חסרים,{' '}
          {((stats.source1 || 0) + (stats.source2 || 0) + 
            (stats.source3 || 0) + (stats.source4 || 0))} בדרך
        </div>
      </div>

      {/* Side Panel */}
      {selectedCard && (
        <CardDetails 
          card={selectedCard} 
          onClose={() => setSelectedCard(null)} 
        />
      )}
    </div>
  );
};

export default CardsGrid;