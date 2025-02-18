import React, { useState, useEffect, useMemo } from 'react';
import Card from './Card';
import CardDetails from './CardDetails';
import { TOTAL_CARDS, COLS_PER_ROW, STATUS_ORDER } from '../utils/constants';
import useWindowSize from '../hooks/useWindowSize';

const CardsGrid = () => {
    // ... כל ה-state וה-hooks נשארים אותו דבר ...

    return (
        <div style={{ direction: 'rtl' }} className="flex h-screen">
            {/* Main Content */}
            <div className="flex-1 overflow-auto">
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
                <div className="w-96 border-l bg-white shadow-lg overflow-y-auto flex-shrink-0">
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