import { Button, Table, TableColumnsType } from 'antd'

import { TBooking } from '../../types/booking.type'

import Loading from '../../components/Loading'
import { useGetMyBookingQuery } from '../../redux/features/booking/booking.api'
import { useNavigate } from 'react-router-dom'

function PaymentManagement() {
    const { data: bookingData, isLoading } = useGetMyBookingQuery({ return: true })
    const navigate = useNavigate()

    // const [updateBooking] = useDeleteBookingMutation()
    // // const cancleDataConform = bookingData?.data.map((i: TBooking) => {
    // //     return i.status === 'confirmed' ? true : false
    // // })
    if (isLoading) {
        return <Loading />
    }
    const tableData = bookingData?.data?.map(({ _id, user, customerDetails, payment, pickUpLocation, returnCar, status, car, date, startTime, totalCost, endTime, costWithFeature }: TBooking) => ({
        key: _id,
        userName: customerDetails?.name,
        userEmail: customerDetails?.email,
        carname: car?.name,
        customerDetails,
        car,
        date,
        startTime,
        payment,
        pickUpLocation,
        endTime,
        totalCost,
        costWithFeature,
        returnCar,
        user,
        status,
        bookingData

    }))
    console.log(tableData)

    const handlePayment = async (itemData: TBooking) => {

        navigate('/user/dashboard/payment', {
            state: {
                item: {
                    ...itemData,
                    bookingData
                }
            }
        })
        // const updateData = {
        //     id
        // }
        // try {
        //     const res = await updateBooking(updateData)
        //     console.log(res)
        //     toast.success('booking deleted successfull')
        // } catch (error) {
        //     toast.error('something went wrong')
        // }
    }

    const columns: TableColumnsType<TBooking> = [
        {
            title: 'Name',
            dataIndex: 'userName',
            showSorterTooltip: { target: 'full-header' },

        },
        {
            title: 'email',
            dataIndex: 'userEmail',
        },
        {
            title: 'Total Cost',
            dataIndex: 'totalCost',
        },
        {
            title: 'Car Name',
            dataIndex: 'carname',
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Payment',
            dataIndex: 'payment',
        },
        {
            title: 'Action',
            render: (item) => {
                console.log(item?.returnCar, "item?.returnCar")
                return (
                    <div className='flex gap-2'>
                        {
                            item.payment ?
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Paid</button>
                                :
                                <Button disabled={(item?.returnCar == true ? false : true)} onClick={() => handlePayment(item)}>Pay</Button>
                        }
                    </div>
                )
            }
        },
    ];
    return (
        <div>
            <Table
                columns={columns}
                dataSource={tableData}
                showSorterTooltip={{ target: 'sorter-icon' }}
            />
        </div>
    )
}

export default PaymentManagement