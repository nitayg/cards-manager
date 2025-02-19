import React from 'react';
import CardDetails from './CardDetails';

const Panel = ({ isOpen, card, onClose, isLandscape }) => {
    const handleTransitionEnd = (e) => {
        // מונע bubble של אירוע ה-transition
        e.stopPropagation();
    };

    return (
        <div 
            className={`fixed transition-all duration-300 ease-in-out ${
                isLandscape 
                    ? 'top-0 left-0 h-screen' 
                    : 'bottom-0 left-0 w-full'
            }`}
            style={{
                transform: isLandscape
                    ? `translateX(${isOpen ? '0' : '-360px'})`
                    : `translateY(${isOpen ? '0' : '95%'})`,
                zIndex: 1000
            }}
            onTransitionEnd={handleTransitionEnd}
        >
            {/* Handle - הידית הקבועה */}
            <div 
                className={`absolute bg-white/90 backdrop-blur-sm ${
                    isLandscape
                        ? 'top-1/2 right-0 h-24 w-8 -translate-y-1/2 rounded-r-lg'
                        : 'top-0 left-1/2 w-24 h-8 -translate-x-1/2 rounded-t-lg'
                }`}
            />

            {/* Main Panel - הפאנל העיקרי */}
            <div 
                className={`bg-white shadow-lg ${
                    isLandscape
                        ? 'h-full w-[384px] rounded-r-2xl'
                        : 'h-[80vh] w-full max-w-[384px] mx-auto rounded-t-2xl'
                }`}
                style={{
                    overflowY: 'auto',
                    overflowX: 'hidden'
                }}
            >
                {card && <CardDetails card={card} onClose={onClose} />}
            </div>

            {/* Overlay - במצב מאונך בלבד */}
            {!isLandscape && isOpen && (
                <div 
                    className="fixed inset-0 bg-black/20 -z-10"
                    onClick={onClose}
                />
            )}
        </div>
    );
};

export default Panel;