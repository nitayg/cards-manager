import React, { useState, useEffect, useMemo } from 'react';
import Card from './Card';
import { TOTAL_CARDS, STATUS_ORDER } from '../utils/constants';
import useWindowSize from '../hooks/useWindowSize';

const CardsGrid = () => {
    const [cards, setCards] = useState({});
    const { width } = useWindowSize();

    // מאתחל את הקלפים
    useEffect(() => {
        const initialCards = {};
        for (let i = 1; i <= TOTAL_CARDS; i++) {
            initialCards[i] = { status: 'missing' };
        }
        setCards(initialCards);
    }, []);

    // חישוב מספר העמודות וגודל הקלפים
    const { columnsCount, cardSize } = useMemo(() => {
        const padding = 20;
        const gap = 2;
        const availableWidth = width - (padding * 2);
        
        let cols = width >= 768 ? 25 : Math.floor(availableWidth / 40);
        cols = Math.max(5, Math.min(25, cols));
        
        const totalGaps = cols - 1;
        const size = Math.floor((availableWidth - (totalGaps * gap)) / cols);
        
        return { columnsCount: cols, cardSize: size };
    }, [width]);

    // מטפל בלחיצה על קלף
    const handleCardClick = (number) => {
        const currentStatus = cards[number].status;
        const currentIndex = STATUS_ORDER.indexOf(currentStatus);
        const newStatus = STATUS_ORDER[(currentIndex + 1) % STATUS_ORDER.length];

        setCards(prev => ({
            ...prev,
            [number]: { ...prev[number], status: newStatus }
        }));
    };

    // חישוב הסטטיסטיקה
    const stats = Object.values(cards).reduce((acc, card) => {
        acc[card.status] = (acc[card.status] || 0) + 1;
        return acc;
    }, {});

    // יצירת הגריד
    const rows = Math.ceil(TOTAL_CARDS / columnsCount);
    const grid = Array.from({ length: rows }, (_, rowIndex) => {
        return Array.from({ length: columnsCount }, (_, colIndex) => {
            const number = rowIndex * columnsCount + colIndex + 1;
            return number <= TOTAL_CARDS ? number : null;
        });
    });

    return (
        <div style={{
            padding: '10px',
            direction: 'rtl',
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                maxWidth: '100%',
                overflowX: 'hidden'
            }}>
                {grid.map((row, rowIndex) => (
                    <div key={rowIndex} style={{
                        display: 'flex',
                        gap: '2px',
                        justifyContent: 'center'
                    }}>
                        {row.map((number, colIndex) => (
                            number && (
                                <Card
                                    key={`${rowIndex}-${colIndex}`}
                                    number={number}
                                    status={cards[number]?.status || 'missing'}
                                    onClick={() => handleCardClick(number)}
                                    size={cardSize}
                                />
                            )
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