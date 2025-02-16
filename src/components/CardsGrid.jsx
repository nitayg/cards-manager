import React, { useState, useEffect, useMemo } from 'react';
import Card from './Card';
import { TOTAL_CARDS, COLS_PER_ROW, STATUS_ORDER } from '../utils/constants';
import useWindowSize from '../hooks/useWindowSize';

const CardsGrid = () => {
  const [cards, setCards] = useState({});
  const { width } = useWindowSize();
  
  // חישוב מספר העמודות בהתאם לרוחב המסך
  const columnsCount = useMemo(() => {
    if (width >= 1024) return 25; // מסך רחב
    if (width >= 768) return 20;  // טאבלט
    if (width >= 480) return 15;  // טלפון במצב מאוזן
    return 10;                    // טלפון במצב מאונך
  }, [width]);

  // חישוב גודל הריבוע בהתאם לרוחב המסך ומספר העמודות
  const cardSize = useMemo(() => {
    const gap = 2; // רווח בין הריבועים
    const padding = 20; // ריפוד בצדדים
    const availableWidth = width - (padding * 2);
    const size = Math.floor((availableWidth - (columnsCount - 1) * gap) / columnsCount);
    return Math.min(size, 40); // מגביל את הגודל המקסימלי
  }, [width, columnsCount]);

  // חישוב מספר השורות
  const rowsCount = Math.ceil(TOTAL_CARDS / columnsCount);

  return (
    <div style={{ 
      padding: '10px',
      direction: 'rtl',
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: `repeat(${columnsCount}, ${cardSize}px)`,
        gap: '2px',
        justifyContent: 'center'
      }}>
        {Array.from({ length: TOTAL_CARDS }).map((_, index) => (
          <Card
            key={index + 1}
            number={index + 1}
            status={cards[index + 1]?.status || 'missing'}
            onClick={() => handleCardClick(index + 1)}
            size={cardSize}
          />
        ))}
      </div>
      {/* סטטיסטיקה נשארת אותו דבר */}
    </div>
  );
};

export default CardsGrid;