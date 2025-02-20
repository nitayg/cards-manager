import React from 'react';

const CardDetails = ({ card, onClose, isLandscape }) => {
    if (!card) return null;

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 pb-2">
                <button 
                    onClick={onClose}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                        <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
                <div className="text-2xl font-light">#{card.number}</div>
            </div>

            {/* Status */}
            <div className="px-4 text-center text-gray-600">
                חסר באוסף
            </div>

            {/* Compact Image Area */}
            <div className="flex-1 px-4 flex items-center justify-center">
                <div className="w-24 h-24">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-gray-300">
                        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                        <path d="M3 16l4-4a1 1 0 011.414 0L16 20" strokeWidth="2"/>
                        <path d="M16 14l2-2a1 1 0 011.414 0L22 15" strokeWidth="2"/>
                        <circle cx="8" cy="8" r="2" strokeWidth="2"/>
                    </svg>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="p-4 space-y-3">
                <button className="w-full h-11 bg-black text-white rounded-xl font-medium text-sm hover:bg-gray-900 transition-colors">
                    קליטה למלאי
                </button>
                <div className="flex gap-2">
                    <button className="flex-1 h-11 bg-gray-100 rounded-xl font-medium text-sm hover:bg-gray-200 transition-colors">
                        הוסף לעסקה
                    </button>
                    <button className="flex-1 h-11 bg-gray-100 rounded-xl font-medium text-sm hover:bg-gray-200 transition-colors">
                        כפולים
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;