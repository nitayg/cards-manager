import React from 'react';

const CardDetails = ({ card, onClose }) => {
    if (!card) return null;

    return (
        <div className="h-full bg-white">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
                <button 
                    onClick={onClose}
                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
                >
                    ✕
                </button>
                <h2 className="text-lg font-medium">קלף #{card.number}</h2>
            </div>

            {/* Content */}
            <div className="p-4 space-y-6">
                {/* Image Placeholder */}
                <div className="aspect-[3/4] bg-gray-50 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-gray-200">
                    <div className="text-3xl mb-2">📷</div>
                    <button className="px-4 py-2 text-sm text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50">
                        העלה תמונה
                    </button>
                </div>

                {/* Card Details */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            שם שחקן
                        </label>
                        <div className="p-3 bg-gray-50 rounded-xl text-gray-600">
                            טרם הוזן
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            קבוצה
                        </label>
                        <div className="p-3 bg-gray-50 rounded-xl text-gray-600">
                            טרם הוזן
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            סטטוס
                        </label>
                        <div className="p-3 bg-gray-50 rounded-xl text-gray-600">
                            {card.status === 'missing' ? 'חסר' : 'קיים במלאי'}
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-4">
                    <button className="w-full py-3 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 transition-colors">
                        קליטה למלאי
                    </button>
                    <button className="w-full py-3 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition-colors">
                        הוסף לעסקה
                    </button>
                    <button className="w-full py-3 bg-gray-50 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition-colors">
                        הוסף למלאי כפולים
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;