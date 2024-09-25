import { Button, Layout, Menu } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { logout, selectCurrentUser } from '../../redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

function Dashboard() {
    const user = useAppSelector(selectCurrentUser);
    let items;
    console.log(user, "user");
    const dispatch = useAppDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }
    const nevigate = useNavigate()

    if (user?.role === 'admin') {
        items = [
            {
                key: 'Overview',
                label: <NavLink to="/admin/dashboard">Overview</NavLink>,
            },
            {
                key: 'Manage Cars',
                label: <NavLink to="/admin/dashboard/manage-cars">Manage Cars</NavLink>,
            },
            {
                key: 'Manage Bookings',
                label: <NavLink to="/admin/dashboard/manage-bookings">Manage Bookings</NavLink>,
            },
            {
                key: 'Manage Return Car',
                label: <NavLink to="/admin/dashboard/manage-return-car">Manage Return Car</NavLink>,
            },
            {
                key: 'User Management',
                label: <NavLink to="/admin/dashboard/user-management">User Management</NavLink>,
            },
            {
                key: 'Reports',
                label: <NavLink to="/admin/dashboard/reports">Reports</NavLink>,
            },
        ];
    } else {
        items = [
            {
                key: 'Overview',
                label: <NavLink to="/user/dashboard">Dashboard</NavLink>,
            },
            {
                key: 'Booking Management',
                label: <NavLink to="/user/dashboard/booking-management">Booking Management</NavLink>,
            },
            {
                key: 'Payment Management',
                label: <NavLink to="/user/dashboard/payment-management">Payment Management</NavLink>,
            },
        ];
    }

    return (
        <div className='max-[100%]'>
            <Layout style={{ height: '100%' }}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    style={{ height: '100vh', position: 'sticky', top: '0', left: '0' }}
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="demo-logo-vertical" />
                    <Menu
                        style={{ marginTop: '20px' }}
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['Overview']}
                        items={items}
                    />
                </Sider>
                <Layout >
                    <div className='flex items-center w-full'>
                        <Header style={{ background: 'none' }}><Button className='bg-blue-800 text-white py-4' onClick={handleLogout}>Logout</Button></Header>
                        <Header style={{ background: 'none' }}><Button className='bg-blue-800 text-white py-4' onClick={() => nevigate('/')}>Go To Home</Button></Header>
                    </div>
                    <Content style={{ margin: '24px 16px 0', height: '100%' }}>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                            }}
                        >
                            <Outlet />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}

export default Dashboard;
