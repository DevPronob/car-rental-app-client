import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/Layout/MainLayout';
import Home from '../pages/Home/Home';
import CarListing from '../pages/CarListing/CarListing';
import AboutUs from '../pages/AboutUs/AboutUs';
import CarDetail from '../pages/CarDetails/CarDetail';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import Booking from '../pages/Booking/Booking';
import Dashboard from '../components/Layout/Dashboard';
import UserOverview from '../pages/userDashboard/UserOverview';
import BookingManagement from '../pages/userDashboard/BookingManagement';
import PaymentManagement from '../pages/userDashboard/PaymentManagement';
import AdminOverview from '../pages/adminManagement/AdminOverview';
import ManageCar from '../pages/adminManagement/ManageCar';
import ManageBookings from '../pages/adminManagement/ManageBookings';
import ManageReturnCar from '../pages/adminManagement/ManageReturnCar';
import UserManagement from '../pages/adminManagement/UserManagement';
import Reports from '../pages/adminManagement/Reports';
import ProctectedRoute from '../components/Layout/ProctectedRoute';
import Payment from '../pages/userDashboard/Payment/Payment';
import PaymentSuccess from '../pages/userDashboard/Payment/PaymentSuccess';
import PaymentFailure from '../pages/userDashboard/Payment/PaymentFailure';
import Callback from '../pages/userDashboard/Payment/Callback';
import ChangePassword from '../pages/Auth/ChangePassword';
import NotFound from '../components/NotFound';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/car-listing',
                element: <CarListing />,
            },
            {
                path: '/about-us',
                element: <AboutUs />,
            },
            {
                path: '/car/:id',
                element: <CarDetail />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/sign-up',
                element: <Signup />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
            {
                path: '/booking',
                element: (
                    <ProctectedRoute role='user'>
                        <Booking></Booking>
                    </ProctectedRoute>
                )
            },
            {
                path: '/success/:tran_id',
                element: <PaymentSuccess />

            },
            {
                path: '/payment-failure',
                element: <PaymentFailure />
            },
            {
                path: '/callback',
                element: <Callback />,
            },
            {
                path: '/change-password',
                element: <ChangePassword />,
            },
            {
                path: '*',
                element: <h2 className='max-h-full flex items-end justify-center'>No Route Found</h2> // Create a NotFound component for a custom 404 page
            }
        ],
    },
    {
        path: '/user/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '',
                element: (
                    <ProctectedRoute role='user'>
                        <UserOverview />
                    </ProctectedRoute>

                ),
            },
            {
                path: 'booking-management',
                element: (
                    <ProctectedRoute role='user'>
                        <BookingManagement />
                    </ProctectedRoute>
                ),
            },
            {
                path: 'payment-management',
                element: (
                    <ProctectedRoute role='user'>
                        <PaymentManagement />
                    </ProctectedRoute>
                ),
            },
            {
                path: 'payment',
                element: (
                    <ProctectedRoute role='user'>
                        <Payment />
                    </ProctectedRoute>
                ),
            },

        ],
    },
    {
        path: '/admin/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '',
                element: (
                    <ProctectedRoute role='admin'>
                        <AdminOverview />
                    </ProctectedRoute>
                ),
            },
            {
                path: 'manage-cars',
                element: (
                    <ProctectedRoute role='admin'>
                        <ManageCar />
                    </ProctectedRoute>
                ),
            },
            {
                path: 'manage-bookings',
                element: (
                    <ProctectedRoute role='admin'>
                        <ManageBookings />
                    </ProctectedRoute>
                ),
            },
            {
                path: 'manage-return-car',
                element: (
                    <ProctectedRoute role='admin'>
                        <ManageReturnCar />
                    </ProctectedRoute>
                ),
            },
            {
                path: 'user-management',
                element: (
                    <ProctectedRoute role='admin'>
                        <UserManagement />
                    </ProctectedRoute>
                ),
            },
            {
                path: 'reports',
                element: (
                    <ProctectedRoute role='admin'>
                        <Reports />
                    </ProctectedRoute>
                ),
            },

        ],
    },
]);
