// CardsGrid.jsx עם חלוקת מסך ברורה
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
    const isMobile = width < 768;

    // חישוב מספר עמודות ומידות לפי גודל המסך והאוריינטציה
    const { gridStyle, cardSize, containerStyle } = useMemo(() => {
        // הגדרת מספר עמודות לפי גודל מסך
        let GRID_COLS;
        
        if (isMobile) {
            // במובייל
            GRID_COLS = isLandscape ? 12 : 6; // במאונך פחות עמודות
        } else {
            // במחשב
            GRID_COLS = 25;
        }
        
        const GRID_GAP = isMobile ? 2 : 4;
        const PADDING = isMobile ? 8 : 16;
        
        // חישוב שטח זמין בהתאם למצב המסך
        let availableWidth, availableHeight;
        
        if (selectedCard) {
            if (isLandscape) {
                // מצב אופקי - הרשת בצד ימין, הפאנל בצד שמאל
                availableWidth = width * 0.6 - (PADDING * 2); // 60% מהרוחב
                availableHeight = height - (PADDING * 2);
            } else {
                // מצב אנכי - הרשת למעלה, הפאנל למטה
                availableWidth = width - (PADDING * 2);
                availableHeight = height * 0.5 - (PADDING * 2); // 50% מהגובה
            }
        } else {
            // ללא פאנל - מסך מלא
            availableWidth = width - (PADDING * 2);
            availableHeight = height - (PADDING * 2);
        }
        
        // חישוב גודל הקלף
        const calculatedSize = Math.floor((availableWidth - (GRID_GAP * (GRID_COLS - 1))) / GRID_COLS);
        
        // סגנון למיכל הראשי
        const containerStyle = {
            display: 'flex',
            flexDirection: isLandscape ? 'row' : 'column',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
        };
        
        return {
            gridStyle: {
                display: 'grid',
                gridTemplateColumns: `repeat(${GRID_COLS}, ${calculatedSize}px)`,
                gap: `${GRID_GAP}px`,
                padding: `${PADDING}px`,
                boxSizing: 'border-box',
                justifyContent: 'center',
                overflowY: 'auto',
                overflowX: 'hidden'
            },
            cardSize: calculatedSize,
            containerStyle
        };
    }, [width, height, isLandscape, selectedCard, isMobile]);

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
        <div className="bg-gray-50" style={{ direction: 'rtl', height: '100vh', overflow: 'hidden' }}>
            {/* Container שמתחלק לשניים כשיש קלף נבחר */}
            <div style={containerStyle}>
                {/* חלק עליון/ימני - רשת הקלפים */}
                <div style={{
                    flex: isLandscape ? (selectedCard ? '0.6' : '1') : (selectedCard ? '0.5' : '1'),
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto',
                    transition: 'all 0.3s ease',
                    borderBottom: !isLandscape && selectedCard ? '1px solid #e2e8f0' : 'none',
                    borderLeft: isLandscape && selectedCard ? '1px solid #e2e8f0' : 'none',
                }}>
                    {/* כותרת */}
                    <div className="p-2 text-center">
                        <h1 className="text-xl font-bold">מנהל אוסף קלפי כדורגל</h1>
                    </div>
                    
                    {/* רשת הקלפים */}
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

                {/* חלק תחתון/שמאלי - פאנל פרטים */}
                {selectedCard && (
                    <div style={{
                        flex: isLandscape ? '0.4' : '0.5',
                        backgroundColor: 'white',
                        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        overflowY: 'auto'
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
        </div>
    );
};

export default CardsGrid;