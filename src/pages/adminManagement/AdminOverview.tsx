
import { useGetCarsQuery } from '../../redux/features/car/car.api';
import { useGetBookingQuery } from '../../redux/features/booking/booking.api';
import { useGetPaymentQuery } from '../../redux/features/payment/payment.api';
import Loading from '../../components/Loading';
// import { TCar } from '../../types/car.type';

// type CarResponse = {
//     data: TCar[];  // Ensure data is an array of cars
// };

function AdminOverview() {
    const { data: carData, isLoading: carLoading } = useGetCarsQuery(undefined);
    const { data: bookingData, isLoading: bookLoading } = useGetBookingQuery(undefined);
    const { data: paymentData, isLoading: paymentLoading } = useGetPaymentQuery(undefined);

    if (carLoading || bookLoading || paymentLoading) {
        return <Loading />;
    }

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Available Cars */}
                <div className="shadow-lg bg-white p-8">
                    <p className="text-2xl">
                        {/* Car Icon */}
                    </p>
                    <div className="py-3">
                        <p className="text-xl">Available Cars</p>
                        <p className="text-2xl">
                            {Array.isArray(carData?.data) ? carData.data.length : 0}
                        </p>
                    </div>
                </div>

                {/* Total Bookings */}
                <div className="shadow-lg bg-white p-8">
                    <p className="text-2xl">
                        {/* Booking Icon */}
                    </p>
                    <div className="py-3">
                        <p className="text-xl">Total Bookings</p>
                        <p className="text-2xl">
                            {Array.isArray(bookingData?.data) ? bookingData.data.length : 0}
                        </p>
                    </div>
                </div>

                {/* Revenue */}
                <div className="shadow-lg bg-white p-8">
                    <p className="text-2xl">
                        {/* Payment Icon */}
                    </p>
                    <div className="py-3">
                        <p className="text-xl">Revenue</p>
                        <p className="text-2xl">{paymentData?.data || 0}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminOverview;
