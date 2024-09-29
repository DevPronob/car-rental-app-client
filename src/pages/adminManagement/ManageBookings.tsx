
import { useGetBookingQuery, useUpdateBookingMutation } from '../../redux/features/booking/booking.api'
import { TBooking } from '../../types/booking.type'
import { Button, Table, TableColumnsType } from 'antd'
import toast from 'react-hot-toast'
import Loading from '../../components/Loading'

function ManageBookings() {
    const { data: bookingData, isLoading } = useGetBookingQuery(undefined)
    const [updateBooking] = useUpdateBookingMutation()
    const tableData = bookingData?.data?.map(({ _id, user, customerDetails, status, car, date, startTime, endTime, costWithFeature }: TBooking) => ({
        key: _id,
        userName: customerDetails?.name,
        userEmail: customerDetails?.email,
        carname: car?.name,
        date,
        startTime,
        endTime,
        costWithFeature,
        user,
        status
    }))
    console.log(tableData)

    const handleStatus = async (id: string, status: string) => {
        console.log(status, "status")
        const updateData = {
            id,
            status: status
        }
        try {
            const res = await updateBooking(updateData)
            console.log(res)
            toast.success('booking updated successfull')
        } catch (error) {
            toast.error('something went wrong')
        }
    }



    const columns: TableColumnsType<TBooking> = [
        {
            title: 'Name',
            dataIndex: 'userName',
            showSorterTooltip: { target: 'full-header' },
            responsive: ['xs', 'sm', 'md', 'lg'],

        },
        {
            title: 'email',
            dataIndex: 'userEmail',
            responsive: ['xs', 'sm', 'md', 'lg'],
        },
        {
            title: 'Total Cost',
            dataIndex: 'costWithFeature',
            responsive: ['xs', 'sm', 'md', 'lg'],
        },
        {
            title: 'Car Name',
            dataIndex: 'carname',
            responsive: ['xs', 'sm', 'md', 'lg'],
        },
        {
            title: 'Date',
            dataIndex: 'date',
            responsive: ['xs', 'sm', 'md', 'lg'],
        },
        {
            title: 'Status',
            dataIndex: 'status',
            responsive: ['xs', 'sm', 'md', 'lg'],
        },

        {
            title: 'Action',
            render: (item) => {
                return (
                    <div className='flex gap-2'>

                        <Button onClick={() => handleStatus(item.key, 'confirmed')}>confirmed</Button>
                        <Button onClick={() => handleStatus(item.key, 'cancelled')}>cancelled</Button>
                    </div>
                )
            },
            responsive: ['xs', 'sm', 'md', 'lg'],
        },
    ];
    if (isLoading) {
        return <Loading />
    }
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

export default ManageBookings