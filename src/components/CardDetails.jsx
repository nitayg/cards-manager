import React from 'react';

const CardDetails = ({ card, onClose }) => {
    if (!card) return null;

    return (
        <div className="h-full p-4 bg-white text-center">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">קלף #{card.number}</h2>
                <button 
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 p-2"
                >
                    ✕
                </button>
            </div>

            {/* Image Upload */}
            <div className="mb-6">
                <div className="text-4xl mb-2">📷</div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    העלה תמונה
                </button>
            </div>

            {/* Details */}
            <div className="space-y-4 text-right">
                <div>
                    <div className="font-bold mb-1">שם שחקן</div>
                    <div className="text-gray-600">טרם הוזן</div>
                </div>

                <div>
                    <div className="font-bold mb-1">קבוצה</div>
                    <div className="text-gray-600">טרם הוזן</div>
                </div>

                <div>
                    <div className="font-bold mb-1">סטטוס</div>
                    <div className="text-gray-600">חסר</div>
                </div>
            </div>

            {/* Actions */}
            <div className="mt-8 space-y-2">
                <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
                    קליטה למלאי
                </button>
                <button className="w-full py-2 px-4 bg-gray-100 text-gray-800 rounded hover:bg-gray-200">
                    הוסף לעסקה
                </button>
                <button className="w-full py-2 px-4 bg-gray-100 text-gray-800 rounded hover:bg-gray-200">
                    הוסף למלאי כפולים
                </button>
            </div>
        </div>
    );
};

export default CardDetails;