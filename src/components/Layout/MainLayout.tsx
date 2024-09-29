
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function MainLayout() {
    return (
        <div className='h-100'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout