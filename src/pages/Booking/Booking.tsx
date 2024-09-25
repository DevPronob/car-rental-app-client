import React from 'react'
import { useLocation } from 'react-router-dom';
import { useGetSingleCarQuery } from '../../redux/features/car/car.api';
import ContainerLayout from '../../components/Layout/ContainerLayout';
import InputField from '../../components/Form/InputField';
import FormContainer from '../../components/Form/FormContainer';
import { Button } from 'antd';
import DateField from '../../components/Form/DateField';
import TimeFieldPicker from '../../components/Form/TimeFieldPicker';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useCreateBookingMutation } from '../../redux/features/booking/booking.api';
import toast from 'react-hot-toast';
import moment from 'moment';

function Booking() {
    const [createBooking] = useCreateBookingMutation()
    const { state } = useLocation();
    console.log(state)
    const { data: carData } = useGetSingleCarQuery((state.carId) as string)
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const date = new Date(moment(data.date).format())
        const formattedDate = date.toISOString().slice(0, 10);
        const startTime = moment(new Date(data.startTime)).format('HH:mm')
        console.log()
        const bookingInfo = {
            car: carData?.data._id,
            email: data.email,
            date: formattedDate,
            pickUpLocation: data.pickUpLocation,
            costWithFeature: state.totalPrice,
            startTime: startTime,
            customerDetails: {
                name: data.name,
                email: data.email,
                nid: data.nid,
                drivingLicense: data.drivingLicense
            },
            additationalFeatures: {
                childSeat: state.childSeat,
                gps: state.gps,
                mobileWifi: state.mobileWifi
            }
        }
        try {
            const res = await createBooking(bookingInfo)
            toast.success(res.data.message)
            console.log(res, "res")
        } catch (error) {
            toast.error('something went wrong during booking')
        }

        console.log(data)
    }
    return (
        <div>
            <ContainerLayout>
                <div >
                    {
                        carData && (
                            <div className="mx-2 flex flex-col items-center justify-center my-10 max-w-lg rounded-md border border-gray-100 px-8 py-10 shadow-lg sm:mx-auto">
                                <div>
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold">{carData?.data.name}</h3>
                                        <p className="text-gray-600 pt-2"> Total Price: ${state.totalPrice}</p>
                                        <p className="text-blue-800 font-bold text-xl">Selected Features:</p>

                                        {state.childSeat && <p className='flex items-center gap-2 py-1'><span className=' text-blue-800'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                        </span> Child Seat</p>}
                                        {state.gps && <p className='flex items-center gap-2 py-1'> <span className=' text-blue-800'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                        </span>GPS</p>}
                                        {state.mobileWifi && <p className='flex items-center gap-2 py-1'> <span className=' text-blue-800'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                        </span>Mobile Wifi</p>}
                                    </div>
                                </div>




                                <div className='py-2'>
                                    <FormContainer width='322px' onSubmit={onSubmit}>
                                        <InputField type='text' name='name' label='Name' />
                                        <InputField type='text' name='email' label='Email' />
                                        <InputField type='text' name='nid' label='NID' />
                                        <InputField type='text' name='pickUpLocation' label='Pick Up Location' />
                                        <InputField type='text' name='drivingLicense' label='Driving License' />
                                        <DateField name='date' label='Date' />
                                        <TimeFieldPicker name='startTime' label='Start Time' />
                                        <Button className='bg-blue-700 py-5 text-white w-full my-6' htmlType='submit'>Submit</Button>

                                    </FormContainer>
                                </div>

                            </div>







                        )
                    }





                </div>
            </ContainerLayout>
        </div>
    )
}

export default Booking