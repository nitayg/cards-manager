import React from 'react';

const CardDetails = ({ card, onClose }) => {
    if (!card) return null;

    return (
        <div className="flex flex-col h-full bg-white" style={{ minHeight: '100%' }}>
            {/* Modern Header */}
            <div className="flex items-center justify-between p-6">
                <button 
                    onClick={onClose}
                    className="w-10 h-10 flex items-center justify-center text-gray-400"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="text-3xl font-light">#{card.number}</div>
            </div>

            {/* Main Content */}
            <div className="flex-1 px-6 space-y-8">
                {/* Status Badge */}
                <div className="flex justify-center">
                    <div className={`
                        inline-flex items-center px-4 py-2 rounded-full text-sm
                        ${card.status === 'missing' 
                            ? 'bg-gray-50 text-gray-600' 
                            : 'bg-blue-50 text-blue-600'}
                    `}>
                        {card.status === 'missing' ? 'חסר באוסף' : 'קיים במלאי'}
                    </div>
                </div>

                {/* Image Upload Area */}
                <div className="relative aspect-[3/4] rounded-2xl bg-gray-50 flex flex-col items-center justify-center overflow-hidden">
                    <svg className="w-10 h-10 text-gray-300 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <button className="px-6 py-2.5 bg-white rounded-full text-sm font-medium text-gray-600 shadow-sm hover:shadow transition-shadow duration-200">
                        העלאת תמונה
                    </button>
                </div>
            </div>

            {/* Action Buttons - Fixed at bottom with modern style */}
            <div className="p-6 space-y-4">
                {/* Primary Action */}
                <button className="w-full h-12 bg-black text-white rounded-full text-sm font-medium transition-colors hover:bg-gray-900">
                    קליטה למלאי
                </button>

                {/* Secondary Actions */}
                <div className="flex gap-3">
                    <button className="flex-1 h-12 bg-transparent text-sm font-medium text-gray-800 rounded-full border-2 border-gray-200 hover:border-gray-300 transition-colors">
                        הוסף לעסקה
                    </button>
                    <button className="flex-1 h-12 bg-transparent text-sm font-medium text-gray-800 rounded-full border-2 border-gray-200 hover:border-gray-300 transition-colors">
                        כפולים
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;