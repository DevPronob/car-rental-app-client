/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { useCreateCarMutation, useDeleteCarMutation, useGetCarsQuery, useUpdateCarMutation } from '../../redux/features/car/car.api'
import Loading from '../../components/Loading'
import { TCar } from '../../types/car.type'
import { Button, Col, Form, Input, Modal, Row, Table } from 'antd'
import FormContainer from '../../components/Form/FormContainer'
import InputField from '../../components/Form/InputField'
import TextAreaField from '../../components/Form/TextAreaField'
import InputFieldWithWatch from '../../components/Form/InputFieldWithWatch'
import { Controller, FieldValues, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import { ColumnsType } from 'antd/es/table'
function ManageCar() {
    const { data: carData, isLoading } = useGetCarsQuery(undefined)
    const [deleteCar] = useDeleteCarMutation()

    if (isLoading) {
        return <Loading />


    }
    const tableData = Array.isArray(carData?.data)
        ? carData.data.map(({ _id, name, description, type, images, featured, features, pricePerHour, year, isElectric, status, color }: TCar) => ({
            key: _id,
            name,
            model: type,
            features,
            pricePerHour,
            year,
            isElectric,
            status,
            color,
            featured,
            description,
            images
        }))
        : [];

    const handleDelete = async (id: string) => {
        const toastId = toast.loading('Deleting in');
        try {
            const res = await deleteCar(id)
            if (res?.data.success) {
                toast.success('Delete Car', { id: toastId, duration: 2000 });
            }
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    const columns: ColumnsType<{
        key: string;
        name: string;
        model: string;
        features: string[];
        pricePerHour: number;
        year: string;
        isElectric: boolean;
        status: 'available' | 'unavailable';
        color: string;
        featured: boolean;
        description: string;
        images: string[];
    }> = [
            {
                title: 'Name',
                dataIndex: 'name',
                showSorterTooltip: { target: 'full-header' },
                responsive: ['xs', 'sm', 'md', 'lg'],
            },
            {
                title: 'Year',
                dataIndex: 'year',
                responsive: ['xs', 'sm', 'md', 'lg'],
            },
            {
                title: 'Price Per Hour',
                dataIndex: 'pricePerHour',
                responsive: ['xs', 'sm', 'md', 'lg'],
            },
            {
                title: 'Model',
                dataIndex: 'model',
                responsive: ['xs', 'sm', 'md', 'lg'],
            },
            {
                title: 'Action',
                render: (item) => {
                    return (
                        <div className="flex gap-2">
                            <UpdateCar item={item} />
                            <Button onClick={() => handleDelete(item.key)}>Delete Car</Button>
                        </div>
                    );
                },
                responsive: ['xs', 'sm', 'md', 'lg'],
            },
        ];
    return (
        <>
            <div className='my-3'>
                <AddCar />
            </div>
            <Table
                style={{ height: '100vh' }}
                columns={columns}
                dataSource={tableData}
                showSorterTooltip={{ target: 'sorter-icon' }}
            />
        </>
    )
}





const AddCar = () => {
    const [createCar] = useCreateCarMutation()
    // const [deletedImages, setDeletedimages] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [feature, setFeature] = useState('')
    // const [featured, setFeatured] = useState(false)
    const carAllFeatures = ['Bluetooth', "AC", "Sunroof", "Advanced safety features", "Convertible Roof", "Emergency Control"]
    const carFeatureOptions = carAllFeatures.map((item: string) => {
        return {
            value: item,
            label: item,
        }
    })
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    console.log(feature)
    const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
        const carPostData = {
            name: data.name,
            description: data.description,
            color: data.color,
            isElectric: data.isElectric,
            features: data.features,
            pricePerHour: Number(data.pricePerHour),
            featured: data.featured,
            type: data.model,
            year: data.year
        };

        const formData = new FormData();
        formData.append('data', JSON.stringify(carPostData));

        if (data.images?.length) {
            data.images.forEach((file: File) => formData.append('files', file));
        }

        try {
            const res = await createCar(formData).unwrap()
            console.log(res)
            toast.success("Car Created Successfull")
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <Button onClick={showModal}>Add Car</Button>
            <Modal
                title="Add Car"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <FormContainer onSubmit={handleSubmit} width={'100%'}>
                    <Row gutter={16}>
                        <Row gutter={16}>
                            <Col span={8}>
                                <InputField type={'text'} name={'name'} label='Name' />
                            </Col>
                            <Col span={8}>
                                <InputField type={'text'} name={'model'} label={'Model'} />
                            </Col>
                            <Col span={8}>
                                <InputField type={'text'} name={'color'} label={'Color'} />
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={8}>
                                <InputField type={'text'} name={'pricePerHour'} label={'Price Per Hour'} />
                            </Col>
                            <Col span={8}>
                                <InputField type={'text'} name={'year'} label={'Year'} />
                            </Col>
                            <Col span={8}>
                                <InputField type={'text'} name={'model'} label={'Model'} />
                            </Col>
                        </Row>
                        <Col span={24}>
                            <TextAreaField name={'description'} label={'Description'} />
                        </Col>
                        <Col span={24}>
                            <InputFieldWithWatch
                                options={carFeatureOptions}
                                onValueChange={setFeature}
                                mode='multiple'
                                label={'Features'}
                                name={'features'}
                            />
                        </Col>

                        <Col span={24} md={{ span: 24 }} lg={{ span: 24 }}>
                            <Controller
                                name="images"
                                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                render={({ field: { onChange, value, ...field } }) => (
                                    <Form.Item label="Pictures">
                                        <Input
                                            type="file"
                                            multiple
                                            {...field}
                                            onChange={(e) => onChange(e.target.files ? Array.from(e.target.files) : [])}
                                        />
                                    </Form.Item>
                                )}
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <Controller
                                name='featured'
                                render={({ field: { onChange, value, ...field } }) => (
                                    <Form.Item label="Featured Car">
                                        <Input onChange={(e) => onChange(e.target.checked)}  {...field} type="checkbox" value={value} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </Form.Item>
                                )}
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <Controller
                                name='isElectric'
                                render={({ field: { onChange, value, ...field } }) => (
                                    <Form.Item label="Electrical Car">
                                        <Input onChange={(e) => onChange(e.target.checked)}  {...field} type="checkbox" value={value} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </Form.Item>
                                )}
                            />
                        </Col>

                    </Row>
                    <Button htmlType="submit" style={{ marginTop: '16px' }}>Submit</Button>
                </FormContainer>
            </Modal>
        </>
    )
}




const UpdateCar = ({ item }: any) => {
    // const [images, setImages] = useState(item.images || []);
    console.log(item)
    const statusOptation = ['available', 'unavailable'].map((items: string) => {
        return {
            label: items,
            value: items
        }
    })
    const [updateCar] = useUpdateCarMutation()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [feature, setFeature] = useState('')
    // const [featured, setFeatured] = useState(false)
    const carAllFeatures = ['Bluetooth', "AC", "Sunroof", "Advanced safety features", "Convertible Roof", "Emergency Control"]
    const carFeatureOptions = carAllFeatures.map((item: string) => {
        return {
            value: item,
            label: item,
        }
    })
    console.log(feature)
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('Updating in progress');

        // Construct the data object with relevant fields
        const carPostData = {
            id: item.key,
            name: data.name,
            description: data.description,
            color: data.color,
            isElectric: data.isElectric,
            features: data.features,
            pricePerHour: Number(data.pricePerHour),
            featured: data.featured,
            type: data.model,
            year: data.year
        };

        console.log(carPostData);

        // Filter out undefined or null fields
        // const updateData: Record<string, any> = {};

        // Object.keys(carPostData).forEach((key) => {
        //     if (data[key] !== undefined && data[key] !== null) {
        //         updateData[key] = data[key];
        //     }
        // });


        // console.log(updateData);


        // const formData = new FormData();
        // if (updateData) {
        //     formData.append('data', JSON.stringify(updateData));
        // }
        // // Append JSON data as a string

        // // Append files if they exist
        // if (data.images !== undefined) {
        //     data.images.forEach((file: File) => formData.append('files', file));
        // }

        // console.log("FormData before submission:", Array.from(formData.entries()));
        const dataForm = {
            carPostData,
            images: data.images
        }
        try {
            // Send FormData to the API (ensure the API is set up to handle multipart/form-data)
            const res = await updateCar(dataForm); // Use formData instead of updatedData
            console.log(res)

            if (res?.data.success) {
                toast.success("Car Updated", { id: toastId, duration: 2000 });
            }

            console.log(res);
        } catch (error) {
            toast.error("Failed to update car", { id: toastId });
            console.log(error);
        }
    };



    return (
        <>
            <Button onClick={showModal}>Update Car</Button>
            <Modal
                title="Update Car"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <FormContainer onSubmit={handleSubmit} width={'100%'}>
                    <Row gutter={16}>
                        <Row gutter={16}>
                            <Col span={8}>
                                <InputField defaultValue={item.name} type={'text'} name={'name'} label='Name' />
                            </Col>
                            <Col span={8}>
                                <InputField defaultValue={item.model} type={'text'} name={'model'} label={'Model'} />
                            </Col>
                            <Col span={8}>
                                <InputField defaultValue={item.color} type={'text'} name={'color'} label={'Color'} />
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={8}>
                                <InputField defaultValue={item.pricePerHour} type={'text'} name={'pricePerHour'} label={'Price Per Hour'} />
                            </Col>
                            <Col span={8}>
                                <InputField defaultValue={item.year} type={'text'} name={'year'} label={'Year'} />
                            </Col>
                        </Row>
                        <Col span={24}>
                            <TextAreaField defaultValue={item.description} name={'description'} label={'Description'} />
                        </Col>
                        <Col span={24}>
                            <InputFieldWithWatch
                                options={statusOptation}
                                defaultValue={item.status}
                                onValueChange={setFeature}
                                label={'Status'}
                                name={'status'}
                            />
                        </Col>
                        <Col span={24}>
                            <InputFieldWithWatch
                                options={carFeatureOptions}
                                defaultValue={item.features}
                                onValueChange={setFeature}
                                mode='multiple'
                                label={'Features'}
                                name={'features'}
                            />
                        </Col>

                        <Col span={24} md={{ span: 24 }} lg={{ span: 24 }}>
                            <Controller
                                name="images"
                                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                render={({ field: { onChange, value, ...field } }) => (
                                    <Form.Item label="Pictures">
                                        <Input
                                            type="file"
                                            multiple
                                            {...field}
                                            onChange={(e) => onChange(e.target.files ? Array.from(e.target.files) : [])}
                                        />
                                    </Form.Item>
                                )}
                            />
                            {
                                item?.images?.map((src: string) => {
                                    return <div className="relative w-36 h-36">
                                        <div className='flex items-center gap-3'>
                                            <img src={src} className="w-full h-full object-cover rounded-md" />
                                        </div>
                                        <button

                                            className="absolute top-1 right-1 w-6 h-6 text-white bg-black bg-opacity-50 rounded-full flex justify-center items-center hover:bg-opacity-70"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                    console.log(src, "src")
                                })
                            }
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <Controller
                                name='featured'
                                render={({ field: { onChange, value, ...field } }) => (
                                    <Form.Item label="Featured Car">
                                        <Input defaultChecked={item.featured} onChange={(e) => onChange(e.target.checked)}  {...field} type="checkbox" value={value} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </Form.Item>
                                )}
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <Controller
                                name='isElectric'
                                render={({ field: { onChange, value, ...field } }) => (
                                    <Form.Item label="Electrical Car">
                                        <Input defaultChecked={item.isElectric} onChange={(e) => onChange(e.target.checked)}  {...field} type="checkbox" value={value} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </Form.Item>
                                )}
                            />
                        </Col>

                    </Row>
                    <Button htmlType="submit" style={{ marginTop: '16px' }}>Submit</Button>
                </FormContainer>
            </Modal>
        </>
    )
}


export default ManageCar

