// PaymentSuccess.tsx

import { useParams } from "react-router-dom";
import { useGetMyPaymentQuery } from "../../../redux/features/payment/payment.api";
import Invoice from "../../../components/Invoice";


const PaymentSuccess = () => {
    const { tran_id } = useParams()
    const { data } = useGetMyPaymentQuery(tran_id)
    console.log(data?.data[0], "data")
    return (
        <div>
            <div className="text-center py-20">
                <h1 className="text-4xl font-bold text-green-600">Payment Successful!</h1>
                <p className="mt-4 text-lg">Thank you for your booking. We have received your payment.</p>
            </div>

            <Invoice item={data?.data[0]} />
        </div>
    );
};

export default PaymentSuccess;
