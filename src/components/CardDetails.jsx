import React from 'react';

const CardDetails = ({ card, onClose }) => {
    if (!card) return null;

    return (
        <div className="h-full bg-white">
            {/* Header - יותר נקי */}
            <div className="flex justify-between items-center p-6">
                <button 
                    onClick={onClose}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600"
                >
                    ✕
                </button>
                <span className="text-xl font-light">#{card.number}</span>
            </div>

            {/* Content */}
            <div className="px-6 pb-6 space-y-8">
                {/* Image Area - מודרני יותר */}
                <div className="aspect-[3/4] rounded-3xl bg-gray-50 flex flex-col items-center justify-center">
                    <svg className="w-12 h-12 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <button className="px-6 py-2.5 text-sm text-gray-500 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                        העלה תמונה
                    </button>
                </div>

                {/* Quick Actions - רשימה אופקית */}
                <div className="flex justify-around py-2">
                    <button className="flex flex-col items-center text-gray-500">
                        <span className="text-2xl mb-1">📥</span>
                        <span className="text-xs">קליטה</span>
                    </button>
                    <button className="flex flex-col items-center text-gray-500">
                        <span className="text-2xl mb-1">🔄</span>
                        <span className="text-xs">החלפה</span>
                    </button>
                    <button className="flex flex-col items-center text-gray-500">
                        <span className="text-2xl mb-1">➕</span>
                        <span className="text-xs">כפול</span>
                    </button>
                </div>

                {/* Card Info - מינימליסטי */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="text-sm text-gray-400">סטטוס</div>
                        <div className="text-lg">
                            {card.status === 'missing' ? 'חסר באוסף' : 'קיים במלאי'}
                        </div>
                    </div>
                </div>

                {/* Footer Actions - כפתור מרכזי אחד */}
                <div className="pt-4">
                    <button className="w-full py-4 bg-black text-white font-medium rounded-2xl hover:bg-gray-900 transition-colors">
                        עדכן סטטוס
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;