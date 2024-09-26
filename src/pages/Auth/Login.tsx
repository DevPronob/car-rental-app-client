
import FormContainer from '../../components/Form/FormContainer'
import InputField from '../../components/Form/InputField'
import { Button } from 'antd'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../redux/features/auth/auth.api'
import toast from 'react-hot-toast'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { selectCurrentUser, setUser } from '../../redux/features/auth/authSlice'
import { zodResolver } from '@hookform/resolvers/zod';
import loginScheamaValidation from '../../schemas/LoginScheama'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
function Login() {
    const [login] = useLoginMutation()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const currentUser = useAppSelector(selectCurrentUser);
    console.log(currentUser, "courrentUser")
    const handleForgetPass = () => {
        navigate('/change-password')
    }
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const res = await login(data)
            // toast.success(res.data?.message)
            console.log(res.error, "res")
            // console.log(res.data?.data, "res")
            if ('error' in res && (res.error as FetchBaseQueryError)?.data) {
                const errorData = (res.error as FetchBaseQueryError).data as { success: boolean; message: string };

                if (!errorData.success) {
                    toast.error(errorData.message);
                    return;
                }
            }
            const user = {
                userId: res.data?.data.user._id,
                name: res.data?.data.user.name,
                email: res.data?.data.user.email,
                role: res.data?.data.user.role
            }
            console.log(res.data?.data.token, "token")
            dispatch(setUser({ user: user, token: res.data?.data.token }));
            navigate(`/${user?.role}/dashboard`)
            toast.success('login successfull')

        } catch (error) {
            toast.error("something went wrong")
            console.log(error)
        }
    }
    return (

        <div className='flex items-center justify-center my-6 h-full'>

            <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-[360px] xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                <h3 className='text-2xl text-center font-bold text-gray-700 pt-6'>Login</h3>
                <div className='flex items-center justify-center py-6'>
                    <FormContainer resolver={zodResolver(loginScheamaValidation)} width='322px' onSubmit={onSubmit}>
                        <InputField type='text' name='email' label='Email' />
                        <InputField type='text' name='password' label='Password' />
                        <a onClick={handleForgetPass} className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 my-4">Forgot password?</a>
                        <div className="flex items-center mt-2">
                            <input id="remember-me" type="checkbox" className="mt-1 mr-2" />
                            <label >Accpect Our Privacy Policy and Terms of Service.!</label>
                        </div>
                        <Button className='bg-blue-700 py-5 text-white w-full my-6' htmlType='submit'>Submit</Button>
                        <p className="text-base font-light text-gray-500 dark:text-gray-400">
                            Already have an account  <Link to="/sign-up" className="ms-3 font-medium text-primary-600 hover:underline">Sign up</Link>
                        </p>
                    </FormContainer>

                </div>
            </div>

        </div>
    )
}

export default Login