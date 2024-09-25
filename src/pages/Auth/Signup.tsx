import { Button } from 'antd'

import FormContainer from '../../components/Form/FormContainer'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import InputField from '../../components/Form/InputField'

import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useSignUpMutation } from '../../redux/features/auth/auth.api'


function Signup() {
    const [signUp] = useSignUpMutation()
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data)
        if (data.password !== data.confirmPassword) {
            toast.error("your password and confirm password are not matching")
            return
        }
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,
            // address: "comilla"
        }
        try {
            const res = await signUp(userInfo)
            toast.success(res.data.message)
            console.log(res, "res")
        } catch (error) {
            toast.error('something went wrong during sign up')
        }
    }
    return (
        <div className='flex items-center justify-center my-6 '>

            <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-[360px] xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                <h3 className='text-2xl text-center font-bold text-gray-700 pt-6'>Sign Up</h3>
                <div className='flex items-center justify-center py-6'>
                    <FormContainer width='322px' onSubmit={onSubmit}>
                        <InputField type='text' name='name' label='Name' />
                        <InputField type='text' name='email' label='Email' />
                        <InputField type='text' name='password' label='Password' />
                        <InputField type='text' name='confirmPassword' label='Confirm Password' />
                        <InputField type='text' name='phone' label='Phone' />
                        <div className="flex items-center">
                            <input id="remember-me" type="checkbox" className="mt-1 mr-2" />
                            <label >Accpect Our Privacy Policy and Terms of Service.!</label>
                        </div>
                        <Button className='bg-blue-700 py-5 text-white w-full my-6' htmlType='submit'>Submit</Button>
                        <p className="text-base font-light text-gray-500 dark:text-gray-400 mt-3">
                            Don’t have an account yet? <Link to="/login" className="ms-3 font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                        </p>
                    </FormContainer>

                </div>
            </div>

        </div>
    )
}

export default Signup