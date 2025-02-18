import React from 'react';
import { STATUS_COLORS } from '../utils/constants';

const CardDetails = ({ card, onClose }) => {
    if (!card) return null;

    return (
        <div className="h-full p-4">
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

            {/* Card Image */}
            <div className="mb-6">
                <div className="aspect-[2/3] bg-gray-100 rounded-lg flex flex-col items-center justify-center mb-2">
                    <div className="text-gray-400 mb-2 text-4xl">📷</div>
                    <button className="text-blue-500 hover:text-blue-600 text-sm px-3 py-1 border border-blue-500 rounded">
                        העלה תמונה
                    </button>
                </div>
            </div>

            {/* Card Details */}
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-600">שם שחקן</label>
                    <div className="mt-1 p-2 bg-gray-50 rounded-md">
                        טרם הוזן
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600">קבוצה</label>
                    <div className="mt-1 p-2 bg-gray-50 rounded-md">
                        טרם הוזן
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600">סטטוס</label>
                    <div className="mt-1 p-2 bg-gray-50 rounded-md">
                        {card.status === 'missing' ? 'חסר' : 'קיים במלאי'}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600">כפולים במלאי</label>
                    <div className="mt-1 p-2 bg-gray-50 rounded-md">
                        0
                    </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-4">
                    <button 
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        onClick={() => console.log('קליטה למלאי')}
                    >
                        קליטה למלאי
                    </button>
                    <button 
                        className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                        onClick={() => console.log('הוסף לעסקה')}
                    >
                        הוסף לעסקה
                    </button>
                    <button 
                        className="w-full py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => console.log('הוסף למלאי כפולים')}
                    >
                        הוסף למלאי כפולים
                    </button>
                </div>

                {/* Transaction History */}
                <div className="pt-4">
                    <h3 className="font-medium text-gray-700 mb-2">היסטוריית תנועות</h3>
                    <div className="space-y-2">
                        {card.transactions?.length > 0 ? (
                            card.transactions.map((transaction, index) => (
                                <div 
                                    key={index} 
                                    className="p-2 bg-gray-50 rounded-lg text-sm border border-gray-100"
                                >
                                    <div className="font-medium">{transaction.date}</div>
                                    <div className="text-gray-600">
                                        {transaction.type} - {transaction.details}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-sm text-gray-500 p-2 bg-gray-50 rounded-lg">
                                אין תנועות להצגה
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;