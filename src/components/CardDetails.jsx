import React from 'react';

const CardDetails = ({ card, onClose }) => {
    if (!card) return null;

    return (
        <div className="h-full bg-white flex flex-col">
            {/* Header עם קו הפרדה עדין */}
            <div className="px-6 py-4 flex justify-between items-center border-b border-gray-100">
                <h2 className="text-2xl font-light">#{card.number}</h2>
                <button 
                    onClick={onClose}
                    className="w-8 h-8 flex items-center justify-center text-lg text-gray-400 hover:text-gray-600"
                >
                    ✕
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 space-y-6 overflow-auto">
                {/* Status Indicator */}
                <div className="flex items-center justify-center">
                    <span className={`
                        px-4 py-2 rounded-full text-sm
                        ${card.status === 'missing' 
                            ? 'bg-gray-100 text-gray-600' 
                            : 'bg-green-50 text-green-600'}
                    `}>
                        {card.status === 'missing' ? 'חסר באוסף' : 'קיים במלאי'}
                    </span>
                </div>

                {/* Image Upload Area */}
                <div className="aspect-[3/4] w-full bg-gray-50 rounded-2xl flex flex-col items-center justify-center">
                    <div className="mb-4">
                        <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <button className="px-6 py-2 bg-white rounded-full text-sm text-gray-600 shadow-sm hover:shadow-md transition-all duration-200">
                        העלה תמונה
                    </button>
                </div>
            </div>

            {/* Action Buttons - קבוע בתחתית */}
            <div className="p-6 space-y-3 bg-gray-50">
                <button className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors duration-200">
                    קליטה למלאי
                </button>
                <div className="flex gap-3">
                    <button className="flex-1 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                        הוסף לעסקה
                    </button>
                    <button className="flex-1 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                        הוסף למלאי כפולים
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;