import { useState } from 'react'
import { useGetBookingQuery, useReturnCarBookingMutation } from '../../redux/features/booking/booking.api'
import { TBooking } from '../../types/booking.type'
import toast from 'react-hot-toast'
import { Button, Col, Modal, Row, Table, TableColumnsType } from 'antd'
import FormContainer from '../../components/Form/FormContainer'
import TimeFieldPicker from '../../components/Form/TimeFieldPicker'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import moment from 'moment'
import Loading from '../../components/Loading'

function ManageReturnCar() {
    const { data: bookingData, isLoading } = useGetBookingQuery(undefined)

    console.log("totalData", bookingData)
    // const [updateBooking] = useUpdateBookingMutation()
    const tableData = bookingData?.data?.map(({ _id, user, returnCar, status, totalCost, car, date, startTime, endTime, costWithFeature, customerDetails }: TBooking) => ({
        key: _id,
        customerDetails,
        userName: user?.name,
        buyerName: customerDetails?.name,
        userEmail: user?.email,
        carname: car?.name,
        date,
        startTime,
        endTime,
        costWithFeature,
        color: car?.color,
        pricePerHour: car?.pricePerHour,
        user,
        status,
        totalCost: Math.floor(totalCost),
        returnCar
    }))
    console.log(tableData, "tableData")

    if (isLoading) {
        return <Loading />
    }

    // const handleStatus = async (id: string, status: string) => {
    //     console.log(status, "status")
    //     const updateData = {
    //         id,
    //         status: status,
    //         return: true
    //     }
    //     try {
    //         const res = await updateBooking(updateData)
    //         console.log(res)
    //         toast.success('booking updated successfull')
    //     } catch (error) {
    //         toast.error('something went wrong')
    //     }
    // }

    const columns: TableColumnsType<TBooking> = [
        {
            title: 'Car name',
            dataIndex: 'carname',
            showSorterTooltip: { target: 'full-header' },
            responsive: ['xs', 'sm', 'md', 'lg'],

        },
        {
            title: 'End Time',
            dataIndex: 'endTime',
            responsive: ['xs', 'sm', 'md', 'lg'],
        },
        {
            title: 'Cost with Features',
            dataIndex: 'costWithFeature',
            responsive: ['xs', 'sm', 'md', 'lg'],
        },
        {
            title: 'Start Time',
            dataIndex: 'startTime',
            responsive: ['xs', 'sm', 'md', 'lg'],
        },
        {
            title: 'Total Cost',
            dataIndex: 'totalCost',
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
            title: 'Booked By',
            dataIndex: 'buyerName',
            responsive: ['xs', 'sm', 'md', 'lg'],
        },
        {
            title: 'Action',
            render: (item) => {
                return (
                    <div className='flex gap-2'>
                        {
                            item.returnCar ? "Car Already Returned" : <ReturnedCar item={item} />
                        }

                    </div>
                )
            }
        },
    ];
    return (
        <div>
            <Table
                style={{ padding: "0" }}
                columns={columns}
                dataSource={tableData}
                showSorterTooltip={{ target: 'sorter-icon' }}
            />
        </div>
    )
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReturnedCar = ({ item }: any) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [returnCarBooking] = useReturnCarBookingMutation()
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
        const updateReturnData = {
            bookingId: item?.key,
            endTime: moment(new Date(data.endTime)).format('HH:mm'),
        }
        try {
            const res = await returnCarBooking(updateReturnData)
            console.log(res)
            toast.success('car returned successfully')
        } catch (error) {
            toast.error('something went wrong')
        }
        console.log(updateReturnData)
    }
    return (
        <>
            <Button onClick={showModal}>Return Car</Button>
            <Modal
                title="Return Car"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <FormContainer onSubmit={handleSubmit} width={'100%'}>
                    <Row gutter={24}>
                        <Col span={24}>
                            <TimeFieldPicker name={'endTime'} label='End time' />
                        </Col>

                    </Row>
                    <Button htmlType="submit" style={{ marginTop: '16px' }}>Submit</Button>
                </FormContainer>
            </Modal>
        </>
    )
}













export default ManageReturnCar