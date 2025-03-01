// CardsGrid.jsx המעודכן לתיקון תצוגת מובייל

import React, { useState, useEffect, useMemo } from 'react';
import Card from './Card';
import CardDetails from './CardDetails';
import { TOTAL_CARDS, COLS_PER_ROW, STATUS_ORDER } from '../utils/constants';
import useWindowSize from '../hooks/useWindowSize';

const CardsGrid = () => {
    const [cards, setCards] = useState({});
    const [selectedCard, setSelectedCard] = useState(null);
    const { width, height } = useWindowSize();
    const isLandscape = width > height;

    // חישוב רוחב זמין עם מספר משתנה של קלפים בשורה לפי גודל המסך
    const { gridStyle, cardSize } = useMemo(() => {
        // בדיקה אם זה מכשיר מובייל (פחות מ-768px)
        const isMobile = width < 768;
        
        // קביעת מספר עמודות בהתאם לסוג המכשיר
        const GRID_COLS = isMobile ? (isLandscape ? 12 : 8) : 25;
        
        const GRID_GAP = isMobile ? 2 : 4;
        const PADDING = isMobile ? 8 : 16;
        
        // חישוב גודל הקלף בהתבסס על הרוחב הזמין
        const availableWidth = width - (isLandscape && selectedCard ? 384 : 0) - (PADDING * 2);
        const calculatedSize = Math.floor((availableWidth - (GRID_GAP * (GRID_COLS - 1))) / GRID_COLS);

        return {
            gridStyle: {
                display: 'grid',
                gridTemplateColumns: `repeat(${GRID_COLS}, ${calculatedSize}px)`,
                gap: `${GRID_GAP}px`,
                padding: `${PADDING}px`,
                width: '100%',
                boxSizing: 'border-box',
                justifyContent: 'center'
            },
            cardSize: calculatedSize
        };
    }, [width, isLandscape, selectedCard]);

    useEffect(() => {
        const initialCards = {};
        for (let i = 1; i <= TOTAL_CARDS; i++) {
            initialCards[i] = { 
                number: i, 
                status: 'missing',
                isSelected: false 
            };
        }
        setCards(initialCards);
    }, []);

    const handleCardClick = (number) => {
        setCards(prev => {
            const newCards = { ...prev };
            Object.keys(newCards).forEach(key => {
                newCards[key].isSelected = false;
            });
            newCards[number].isSelected = true;
            return newCards;
        });
        setSelectedCard(cards[number]);
    };

    return (
        <div className="min-h-screen bg-gray-50" style={{ direction: 'rtl' }}>
            {/* Main Content */}
            <main className="min-h-screen overflow-auto" style={{ 
                marginLeft: isLandscape && selectedCard ? '384px' : '0',
                transition: 'margin 0.3s ease',
                paddingBottom: !isLandscape && selectedCard ? '50vh' : '0', // שומר מקום לפאנל במצב אנכי
            }}>
                {/* Header */}
                <div className="p-4">
                    <h1 className="text-2xl font-bold text-center mb-4">מנהל אוסף קלפי כדורגל</h1>
                </div>
                
                {/* Grid Container */}
                <div className="p-4">
                    <div style={gridStyle}>
                        {Object.values(cards).map((card) => (
                            <Card
                                key={card.number}
                                number={card.number}
                                status={card.status}
                                isSelected={card.isSelected}
                                onClick={() => handleCardClick(card.number)}
                                size={cardSize}
                            />
                        ))}
                    </div>
                </div>
            </main>

            {/* Panel */}
            {selectedCard && (
                <div style={{
                    position: 'fixed',
                    top: isLandscape ? 0 : 'auto',
                    bottom: isLandscape ? 'auto' : 0,
                    left: isLandscape ? 0 : 0,
                    width: isLandscape ? '384px' : '100%',
                    height: isLandscape ? '100vh' : '50vh',
                    backgroundColor: 'white',
                    boxShadow: isLandscape ? 
                        '0 4px 12px rgba(0, 0, 0, 0.1)' : 
                        '0 -4px 12px rgba(0, 0, 0, 0.1)',
                    borderRadius: isLandscape ? '0 16px 16px 0' : '16px 16px 0 0',
                    zIndex: 1000,
                    transition: 'transform 0.3s ease'
                }}>
                    <CardDetails 
                        card={selectedCard} 
                        onClose={() => {
                            setSelectedCard(null);
                            setCards(prev => {
                                const newCards = { ...prev };
                                Object.keys(newCards).forEach(key => {
                                    newCards[key].isSelected = false;
                                });
                                return newCards;
                            });
                        }}
                        isLandscape={isLandscape}
                    />
                </div>
            )}
        </div>
    );
};

export default CardsGrid;