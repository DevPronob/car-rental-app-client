import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function MainLayout() {
    return (
        <div className='h-100'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default MainLayout