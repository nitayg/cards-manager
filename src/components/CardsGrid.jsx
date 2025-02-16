import React, { useState, useEffect, useMemo } from 'react';
import Card from './Card';
import { TOTAL_CARDS, STATUS_ORDER } from '../utils/constants';
import useWindowSize from '../hooks/useWindowSize';

const CardsGrid = () => {
  const [cards, setCards] = useState({});
  const { width } = useWindowSize();

  // חישוב רוחב מקסימלי זמין (מחסירים padding מכל צד)
  const availableWidth = width - 40; // 20px padding מכל צד

  // חישוב מספר העמודות האופטימלי
  const columnsCount = useMemo(() => {
    // במצב מאוזן רוצים בדיוק 25 עמודות
    if (width >= 1024) return 25;
    
    // במצב מאונך מחשבים כמה עמודות יכולות להיכנס
    // מניחים שכל קלף צריך להיות לפחות 30px + 2px gap
    const minCardWidth = 32; // מינימום רוחב + gap
    const maxColumns = Math.floor(availableWidth / minCardWidth);
    
    // מוודאים שיש לפחות 5 עמודות ולא יותר מ-25
    return Math.max(5, Math.min(25, maxColumns));
  }, [width, availableWidth]);

  // חישוב גודל הקלף כך שכל השורה תתאים במדויק לרוחב הזמין
  const cardSize = useMemo(() => {
    const gap = 2; // הרווח בין הקלפים
    const totalGaps = columnsCount - 1;
    const totalGapWidth = totalGaps * gap;
    const availableWidthForCards = availableWidth - totalGapWidth;
    return Math.floor(availableWidthForCards / columnsCount);
  }, [availableWidth, columnsCount]);

  // חישוב מספר השורות
  const rowsCount = Math.ceil(TOTAL_CARDS / columnsCount);

  // יצירת מערך של שורות ועמודות
  const grid = useMemo(() => {
    const rows = [];
    for (let i = 0; i < rowsCount; i++) {
      const row = [];
      for (let j = 0; j < columnsCount; j++) {
        const number = i * columnsCount + j + 1;
        if (number <= TOTAL_CARDS) {
          row.push(number);
        }
      }
      rows.push(row);
    }
    return rows;
  }, [rowsCount, columnsCount]);

  return (
    <div style={{ 
      padding: '10px',
      direction: 'rtl',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box'
    }}>
      <div style={{ 
        width: '100%',
        maxWidth: `${availableWidth}px`,
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        alignItems: 'center'
      }}>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} style={{ 
            display: 'flex',
            gap: '2px',
            width: '100%',
            justifyContent: 'center'
          }}>
            {row.map(number => (
              <Card
                key={number}
                number={number}
                status={cards[number]?.status || 'missing'}
                onClick={() => handleCardClick(number)}
                size={cardSize}
              />
            ))}
          </div>
        ))}
      </div>
      <div style={{ 
        marginTop: '20px', 
        textAlign: 'center',
        fontSize: '16px',
        padding: '10px'
      }}>
        סטטיסטיקה: {stats.owned || 0} קלפים ברשותי,{' '}
        {stats.missing || 0} חסרים,{' '}
        {((stats.source1 || 0) + (stats.source2 || 0) + 
          (stats.source3 || 0) + (stats.source4 || 0))} בדרך
      </div>
    </div>
  );
};

export default CardsGrid;