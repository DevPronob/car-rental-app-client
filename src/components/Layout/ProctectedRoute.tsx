import { ReactNode } from 'react'
import { useAppSelector } from '../../redux/hooks';
import { logout, useCurrentToken } from '../../redux/features/auth/authSlice';
import { verifyToken } from '../../utilits/VerifyToken';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProctectedRoute({ children, role }: { children: ReactNode, role: string | undefined }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let user: any;
    const dispatch = useDispatch()
    const token = useAppSelector(useCurrentToken);
    if (token) {
        user = verifyToken(token)
    }
    if (role !== undefined && role !== user?.role) {
        dispatch(logout());
        return <Navigate to="/login" replace={true} />;
    }
    if (!token) {
        return <Navigate to='/login' replace={true} />
    }
    return <>{children}</>
}

export default ProctectedRoute