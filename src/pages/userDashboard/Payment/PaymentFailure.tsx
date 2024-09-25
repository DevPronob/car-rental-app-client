// PaymentFailure.tsx
import React from 'react';

const PaymentFailure = () => {
    return (
        <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-red-600">Payment Failed</h1>
            <p className="mt-4 text-lg">Unfortunately, the payment did not go through. Please try again later.</p>
        </div>
    );
};

export default PaymentFailure;
