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

    // חישוב רוחב זמין עם מספר קבוע של קלפים בשורה
    const { gridStyle, cardSize } = useMemo(() => {
        const FIXED_COLS = 25; // תמיד 25 קלפים בשורה
        const GRID_GAP = 4;
        const PADDING = 16;
        
        // חישוב גודל הקלף בהתבסס על הרוחב הזמין
        const availableWidth = width - (isLandscape && selectedCard ? 384 : 0) - (PADDING * 2);
        const calculatedSize = Math.floor((availableWidth - (GRID_GAP * (FIXED_COLS - 1))) / FIXED_COLS);

        return {
            gridStyle: {
                display: 'grid',
                gridTemplateColumns: `repeat(${FIXED_COLS}, ${calculatedSize}px)`,
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
                transition: 'margin 0.3s ease'
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
                    top: 0,
                    [isLandscape ? 'left' : 'bottom']: 0,
                    width: isLandscape ? '384px' : '100%',
                    height: isLandscape ? '100vh' : '50vh',
                    backgroundColor: 'white',
                    boxShadow: isLandscape ? 
                        '0 4px 12px rgba(0, 0, 0, 0.1)' : 
                        '0 -4px 12px rgba(0, 0, 0, 0.1)',
                    borderRadius: isLandscape ? '0 16px 16px 0' : '16px 16px 0 0',
                    zIndex: 1000,
                    transform: isLandscape ? 'none' : `translateY(${selectedCard ? '0' : '100%'})`,
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