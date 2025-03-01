// CardDetails.jsx עם התאמות לתצוגה המפוצלת
import React from 'react';
import { STATUS_COLORS } from '../utils/constants';

const CardDetails = ({ card, onClose, isLandscape }) => {
    if (!card) return null;

    // המרה של סטטוס למלל בעברית
    const getStatusText = (status) => {
        switch (status) {
            case 'owned': 
                return 'יש ברשותי';
            case 'missing': 
                return 'חסר באוסף';
            case 'source1': 
                return 'מקור 1';
            case 'source2': 
                return 'מקור 2';
            case 'source3': 
                return 'מקור 3';
            case 'source4': 
                return 'מקור 4';
            default: 
                return 'חסר באוסף';
        }
    };

    return (
        <div className="flex flex-col h-full">
            {/* כותרת הפאנל */}
            <div className="p-3 border-b flex items-center justify-between">
                <button 
                    onClick={onClose}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                        <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
                <div className="text-xl font-medium">פרטי קלף</div>
                <div className="text-xl font-bold">#{card.number}</div>
            </div>

            {/* גוף הפאנל */}
            <div className="flex-1 p-4 overflow-y-auto">
                {/* סטטוס הקלף */}
                <div className="mb-4 text-center">
                    <div 
                        className="mx-auto w-24 h-24 rounded-lg flex items-center justify-center text-2xl font-bold"
                        style={{ 
                            backgroundColor: STATUS_COLORS[card.status],
                            color: card.status === 'missing' ? '#1a1a1a' : '#FFFFFF'
                        }}
                    >
                        {card.number}
                    </div>
                    <div className="mt-2 text-lg">
                        {getStatusText(card.status)}
                    </div>
                </div>

                {/* איזור תמונה (פלייסהולדר) */}
                <div className="mb-4 bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                    <div className="text-gray-400">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-32 h-32">
                            <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                            <path d="M3 16l4-4a1 1 0 011.414 0L16 20" strokeWidth="2"/>
                            <path d="M16 14l2-2a1 1 0 011.414 0L22 15" strokeWidth="2"/>
                            <circle cx="8" cy="8" r="2" strokeWidth="2"/>
                        </svg>
                    </div>
                </div>

                {/* פעולות */}
                <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                        <button className="bg-green-600 text-white rounded-lg py-2 px-4 font-medium hover:bg-green-700">
                            יש ברשותי
                        </button>
                        <button className="bg-gray-200 text-gray-800 rounded-lg py-2 px-4 font-medium hover:bg-gray-300">
                            חסר באוסף
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                        <button className="bg-pink-500 text-white rounded-lg py-2 px-4 font-medium hover:bg-pink-600">
                            מקור 1
                        </button>
                        <button className="bg-yellow-500 text-white rounded-lg py-2 px-4 font-medium hover:bg-yellow-600">
                            מקור 2
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                        <button className="bg-purple-500 text-white rounded-lg py-2 px-4 font-medium hover:bg-purple-600">
                            מקור 3
                        </button>
                        <button className="bg-blue-700 text-white rounded-lg py-2 px-4 font-medium hover:bg-blue-800">
                            מקור 4
                        </button>
                    </div>
                    
                    <button className="w-full bg-black text-white rounded-lg py-3 font-medium hover:bg-gray-800">
                        הוסף לעסקה
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;