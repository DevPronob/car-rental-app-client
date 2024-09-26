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
    console.log(bookingData?.data.status, "bookingData")
    const tableData = bookingData?.data?.map(({ _id, user, customerDetails, pickUpLocation, returnCar, status, car, date, startTime, totalCost, endTime, costWithFeature }: TBooking) => ({
        key: _id,
        userName: customerDetails?.name,
        userEmail: customerDetails?.email,
        carname: car?.name,
        customerDetails,
        car,
        date,
        startTime,

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
            title: 'Action',
            render: (item) => {
                return (
                    <div className='flex gap-2'>
                        <Button disabled={item?.returnCar ? false : true} onClick={() => handlePayment(item)}>Pay</Button>
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