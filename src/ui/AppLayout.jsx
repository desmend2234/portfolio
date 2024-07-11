import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
function AppLayout() {
    return (
        <div className="bg-gradient-to-t from-green-100 to-[#a6c1ee] max-w-full">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}

export default AppLayout
