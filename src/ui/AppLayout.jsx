import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
function AppLayout() {
    return (
        <div className="max-w-full bg-gradient-to-t from-green-100 to-[#a6c1ee]">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}

export default AppLayout
