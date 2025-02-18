// ... שאר הייבוא נשאר אותו דבר

const CardsGrid = () => {
    // ... כל הקוד הקודם נשאר אותו דבר עד לפונקציית ה-return

    return (
        <div className="h-screen flex flex-row" style={{ direction: 'rtl' }}>
            {/* Main Content */}
            <div className="flex-1 overflow-hidden flex flex-col">
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

            {/* Sidebar - עכשיו מוגדר כחלק מה-flex layout */}
            {selectedCard && (
                <aside className="h-screen w-96 flex-shrink-0 border-l shadow-lg bg-white overflow-y-auto fixed right-0 top-0">
                    <CardDetails 
                        card={selectedCard} 
                        onClose={() => setSelectedCard(null)} 
                    />
                </aside>
            )}
        </div>
    );
};

export default CardsGrid;