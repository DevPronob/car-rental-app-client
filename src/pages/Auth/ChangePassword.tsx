import React from 'react'
import { useAppDispatch } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/features/auth/authSlice';
import { TResponse } from '../../types/global';
import { useChangePasswordMutation } from '../../redux/features/user/user.api';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import FormContainer from '../../components/Form/FormContainer';
import InputField from '../../components/Form/InputField';
import { Button, Row } from 'antd';
import toast from 'react-hot-toast';

function ChangePassword() {
    const [changePassword] = useChangePasswordMutation()
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('Updating in');
        console.log(data)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const res = (await changePassword(data)) as TResponse<any>;
        if (res?.data?.success) {
            toast.success("User password changed", { id: toastId, duration: 2000 })
            dispatch(logout());
            navigate('/login');
        } else {
            toast.error("User password not changed")
        }
        console.log(res)
    }
    return (
        <div>
            <Row justify="center" align="middle" style={{ height: '100vh' }}>
                <FormContainer onSubmit={onSubmit} width={'30%'}>
                    <InputField type="text" name="oldPassword" label="Old Password" />
                    <InputField type="text" name="newPassword" label="New Password" />
                    <Button htmlType="submit">Login</Button>
                </FormContainer>
            </Row>
        </div>
    )
}

export default ChangePassword