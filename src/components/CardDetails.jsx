import React from 'react';

const CardDetails = ({ card, onClose }) => {
    if (!card) return null;

    return (
        <div className="p-4 bg-white">
            {/* Card Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">קלף #{card.number}</h2>
                <button 
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 p-2"
                >
                    ✕
                </button>
            </div>

            {/* Card Details */}
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-600">סטטוס</label>
                    <div className="mt-1 p-2 bg-gray-50 rounded-md">
                        {card.status === 'missing' ? 'חסר' : 'קיים במלאי'}
                    </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-4">
                    <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        קליטה למלאי
                    </button>
                    <button className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        הוסף לעסקה
                    </button>
                    <button className="w-full py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                        הוסף למלאי כפולים
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;