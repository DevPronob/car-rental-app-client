
import ContainerLayout from '../../../components/Layout/ContainerLayout'
import { useLocation } from 'react-router-dom';
import { Button } from 'antd';
import { useCreatePaymentMutation } from '../../../redux/features/payment/payment.api';

function Payment() {

    const [createPayment] = useCreatePaymentMutation()
    const { state } = useLocation();
    console.log(state.item, "itembooking")
    console.log(state.item)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handlePayment = async (item: any) => {
        const data = {
            bookingId: item?.key,
            car: item?.car._id,
            customerName: item?.userName,
            customerEmail: item?.userEmail,
            phone: item?.user.phone,
            amount: item?.totalCost,
            address: item?.pickUpLocation
        }

        try {
            const res = await createPayment(data)
            window.location.href = res?.data?.data.payment_url
        } catch (error) {
            console.log(error)
        }

        console.log(data, ":item")

    }
    return (
        <div className="bg-gray-100 text-black min-h-screen py-8 dark:bg-[#141D2E] text-white">
            <ContainerLayout>
                <div className="max-w-4xl mx-auto">

                    <div className="bg-white shadow-lg rounded-lg p-8 dark:bg-[#141D2E] text-white">
                        <h3 className="text-3xl font-bold text-gray-800 border-b-2 pb-3 mb-6">Booking Details</h3>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <div>
                                <h4 className="text-2xl font-semibold text-gray-700 mb-4 dark:text-white">Car Details</h4>
                                <div className="space-y-3">
                                    <p className="text-lg text-black dark:text-white"><span className="font-semibold">Car Name:</span> {state?.item.carname}</p>
                                    <p className="text-lg">
                                        <span className="font-semibold text-black dark:text-white">Car Status:</span>
                                        <span className={`ml-2 ${state?.item.status === 'available' ? 'text-green-500' : 'text-red-500'}`}>
                                            {state?.item.status}
                                        </span>
                                    </p>
                                    <p className="text-lg text-black dark:text-white"><span className="font-semibold">Start Time:</span> {state?.item.startTime}</p>
                                    <p className="text-lg text-black dark:text-white"><span className="font-semibold">End Time:</span> {state?.item.endTime || 'N/A'}</p>
                                    <p className="text-lg text-black dark:text-white"><span className="font-semibold">Date:</span> {state?.item.date}</p>
                                    <p className="text-lg text-black dark:text-white"><span className="font-semibold">Total Cost:</span> {Math.floor(state?.item.totalCost)} BDT</p>
                                </div>
                            </div>


                            <div>
                                <h4 className="text-2xl font-semibold text-gray-700 mb-4  dark:text-white">Customer Details</h4>
                                <div className="space-y-3 text-black dark:text-white">
                                    <p className="text-lg text-black dark:text-white"><span className="font-semibold">Name:</span> {state?.item.userName}</p>
                                    <p className="text-lg text-black dark:text-white"><span className="font-semibold">Email:</span> {state?.item.userEmail}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button onClick={() => handlePayment(state.item)} className='bg-blue-800 text-white w-full my-3 py-5'>Pay Now</Button>
                    </div>
                </div>
            </ContainerLayout>
        </div>

    )
}

export default Payment