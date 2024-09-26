// Callback.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Callback = () => {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tran_id = params.get('tran_id');
        const pay_status = params.get('pay_status');

        console.log(`Transaction ID: ${tran_id}, Payment Status: ${pay_status}`);

        // Implement additional logic to handle the response, such as
        // making a call to the backend to verify the payment status
        // and then redirecting to success or failure based on the result.
    }, [location]);

    return (
        <div>
            <h1>Processing Payment...</h1>
            <p>Please wait while we confirm your payment.</p>
        </div>
    );
};

export default Callback;
