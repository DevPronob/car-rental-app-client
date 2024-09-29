import { useState } from 'react'
import { useGetMeQuery, useUpdateUserMutation } from '../../redux/features/user/user.api'
import { Button, Col, Modal, Row } from 'antd'
import FormContainer from '../../components/Form/FormContainer'
import InputField from '../../components/Form/InputField'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import Loading from '../../components/Loading'

function UserOverview() {
    const { data: meData, isLoading } = useGetMeQuery(undefined)
    if (isLoading) {
        return <Loading />
    }
    console.log(meData)
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="m-10 max-w-sm">
                <div className="rounded-lg border bg-white shadow-lg transition-transform transform hover:scale-105">
                    <div className="px-6 pt-8 pb-10">
                        <h1 className="my-1 text-center text-2xl font-extrabold text-gray-900">{meData?.data.name}</h1>
                        <h3 className="mt-2 text-lg font-semibold text-center text-gray-700">
                            <span className="font-bold">Email:</span> {meData?.data.email}
                        </h3>
                        <p className="mt-1 text-center text-sm text-gray-500 hover:text-gray-700">
                            <span className="font-bold">Address:</span> {meData?.data.address ? meData?.data.address : "No data"}
                        </p>
                        <div className="flex items-center justify-center mt-6">
                            <UpdateCar item={meData?.data} />
                        </div>
                        {/* Uncomment this section if you want to display additional info */}
                        {/* <ul className="mt-3 divide-y rounded bg-gray-100 py-2 text-gray-600 shadow-sm">
                    <li className="flex items-center py-3 text-sm">
                        <span>Status</span>
                        <span className="ml-auto">
                            <span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">Open for side gigs</span>
                        </span>
                    </li>
                    <li className="flex items-center py-3 text-sm">
                        <span>Joined On</span>
                        <span className="ml-auto">Apr 08, 2022</span>
                    </li>
                </ul> */}
                    </div>
                </div>
            </div>
        </div>

    )
}



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UpdateCar = ({ item }: any) => {

    const [updateUser] = useUpdateUserMutation()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('Updating in');
        const useUpdatedData = {
            id: item?._id,
            ...data
        };
        console.log(useUpdatedData)
        // const updateData: Record<string, any> = {}
        // Object.keys(carPostData).forEach((key) => {
        //     if (data[key] !== undefined && data[key] !== null) {
        //         updateData[key] = data[key];
        //     }
        // });
        // console.log(updateData, "updateData before appending to FormData");
        // const formData = new FormData();
        // formData.append('data', JSON.stringify(updateData));


        // if (data.images !== undefined) {
        //     data.images.forEach((file: File) => formData.append('files', file));
        // }
        // console.log(formData)
        // console.log("FormData before submission:", Array.from(formData.entries()));
        try {
            const res = await updateUser(useUpdatedData)
            if (res?.data.success) {
                toast.success("User Updated", { id: toastId, duration: 2000 })
            }
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    // const removeImage = (index) => {
    //     console.log(index)
    //     // const filterImages = images.filter((i) => images[i] !== images[index])
    //     console.log(images, "filtert")



    // };
    return (
        <>
            <Button onClick={showModal}>Update Profile</Button>
            <Modal
                title="Update Profile"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <FormContainer onSubmit={handleSubmit} width={'100%'}>
                    <Row gutter={24}>

                        <Col span={24}>
                            <InputField defaultValue={item?.name} type={'text'} name={'name'} label='Name' />
                        </Col>


                        <Col span={24}>
                            <InputField defaultValue={item?.email} type={'text'} name={'email'} label={'Email'} />
                        </Col>


                        <Col span={24}>
                            <InputField defaultValue={item?.address ? item?.address : "no data"} type={'text'} name={'address'} label={'Address'} />
                        </Col>

                    </Row>
                    <Button htmlType="submit" style={{ marginTop: '16px' }}>Submit</Button>
                </FormContainer>
            </Modal>
        </>
    )
}

export default UserOverview