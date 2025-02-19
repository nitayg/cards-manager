import React, { useState, useEffect, useMemo } from 'react';
import Card from './Card';
import CardDetails from './CardDetails';
import { TOTAL_CARDS, COLS_PER_ROW, STATUS_ORDER } from '../utils/constants';
import useWindowSize from '../hooks/useWindowSize';

const CardsGrid = () => {
    const [cards, setCards] = useState({});
    const [selectedCard, setSelectedCard] = useState(null);
    const { width, height } = useWindowSize();

    // בדיקה האם המסך במצב מאוזן
    const isLandscape = width > height;

    const availableWidth = width - 40;

    const { gridStyle, cardSize } = useMemo(() => {
        const MIN_CARD_SIZE = 35;
        const GRID_GAP = 2;
        const PADDING = 10;

        const columnsCount = width >= 768 ? 25 : Math.floor(availableWidth / (MIN_CARD_SIZE + GRID_GAP));
        const calculatedSize = Math.floor((availableWidth - (GRID_GAP * (columnsCount - 1))) / columnsCount);

        return {
            gridStyle: {
                display: 'grid',
                gridTemplateColumns: `repeat(${columnsCount}, ${calculatedSize}px)`,
                gap: `${GRID_GAP}px`,
                padding: `${PADDING}px`,
                width: '100%',
                boxSizing: 'border-box',
                justifyContent: 'center',
                margin: '0 auto'
            },
            cardSize: calculatedSize
        };
    }, [availableWidth, width]);

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

    const stats = Object.values(cards).reduce((acc, card) => {
        acc[card.status] = (acc[card.status] || 0) + 1;
        return acc;
    }, {});

    return (
        <div style={{ direction: 'rtl' }}>
            <main style={{ 
                marginLeft: isLandscape && selectedCard ? '384px' : '0',
                transition: 'margin 0.3s'
            }}>
                <div className="p-4">
                    <h1 className="text-2xl font-bold text-center mb-4">מנהל אוסף קלפי כדורגל</h1>
                </div>
                
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
                    
                    <div className="mt-4 text-center">
                        סטטיסטיקה: {stats.owned || 0} קלפים ברשותי,{' '}
                        {stats.missing || 0} חסרים,{' '}
                        {((stats.source1 || 0) + (stats.source2 || 0) + 
                            (stats.source3 || 0) + (stats.source4 || 0))} בדרך
                    </div>
                </div>
            </main>

            {selectedCard && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: isLandscape ? '384px' : '100%',
                    height: '100vh',
                    backgroundColor: 'white',
                    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
                    overflowY: 'auto',
                    zIndex: 1000,
                    transform: !isLandscape ? 'translateY(50%)' : 'none',
                    borderRadius: !isLandscape ? '8px 8px 0 0' : '0'
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
                    />
                </div>
            )}
        </div>
    );
};

export default CardsGrid;