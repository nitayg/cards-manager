import React, { useState, useEffect, useMemo } from 'react';
import Card from './Card';
import CardDetails from './CardDetails';
import { TOTAL_CARDS, COLS_PER_ROW, STATUS_ORDER } from '../utils/constants';
import useWindowSize from '../hooks/useWindowSize';

const CardsGrid = () => {
    const [cards, setCards] = useState({});
    const [selectedCard, setSelectedCard] = useState(null);
    const { width } = useWindowSize();

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
        <div className="h-screen w-full flex overflow-hidden" style={{ direction: 'rtl' }}>
            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="p-4">
                    <h1 className="text-2xl font-bold text-center mb-4">מנהל אוסף קלפי כדורגל</h1>
                </div>
                
                <div className="flex-1 overflow-auto p-4">
                    <div style={gridStyle}>
                        {Object.values(cards).map((card) => (
                            <Card
                                key={card.number}
                                number={card.number}
                                status={card.status}
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
            </div>

            {/* Sidebar */}
            {selectedCard && (
                <div className="w-96 border-l bg-white shadow-lg overflow-y-auto">
                    <CardDetails 
                        card={selectedCard} 
                        onClose={() => setSelectedCard(null)} 
                    />
                </div>
            )}
        </div>
    );
};

export default CardsGrid;