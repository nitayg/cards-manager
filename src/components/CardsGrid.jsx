return (
    <div className="relative min-h-screen">
        {/* Main Content */}
        <div className={`h-screen overflow-auto ${selectedCard ? 'ml-96' : ''}`} style={{ transition: 'margin 0.3s ease' }}>
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
            <div className="fixed top-0 left-0 h-screen w-96 bg-white shadow-lg overflow-y-auto border-r">
                <CardDetails 
                    card={selectedCard} 
                    onClose={() => setSelectedCard(null)} 
                />
            </div>
        )}
    </div>
);