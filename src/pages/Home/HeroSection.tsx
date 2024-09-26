import { Button } from 'antd'

import Form from '../../components/Form/FormContainer'
import InputField from '../../components/Form/InputField'

import DateField from '../../components/Form/DateField'
import ContainerLayout from '../../components/Layout/ContainerLayout'

function HeroSection() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <div className='bg-hero h-full bg-cover bg-center h-screen'>
            <ContainerLayout>
                <div className='h-screen  sm:flex items-center justify-around md:flex items-center justify-around lg:flex items-center justify-around'>
                    <div className='w-full mb-5 pt-5 sm:mb-0 pt-0 md:mb-0 pt-0 lg:mb-0 pt-0'>
                        <h1 className='text-4xl font-bold text-white pr-15 md:text-4xl lg:text-4xl leading-[4px]"'>FIND YOUR BEST CAR RENTAL WITH AVIS</h1>
                        <Button className='bg-blue-700 text-white mt-5 p-5 border-none leading-line-2'>Book Now</Button>
                    </div>
                    <div className='w-full'>
                        <div className='bg-white rounded-md  w-full'>

                            <div className='p-8 '>
                                <Form width='100%' onSubmit={onSubmit}>
                                    <InputField type="text" name="location " label="location" />
                                    <DateField name="date " label="Date" />
                                    <Button className='bg-blue-700 text-white w-full p-5' htmlType='submit'>Submit</Button>
                                </Form>
                            </div>


                        </div>
                    </div>
                </div>
            </ContainerLayout>
        </div>
    )
}

export default HeroSection