import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function AppLayout() {
    return (
        <div className="relative min-h-screen w-full">
            {/* 背景漸層 */}
            <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-rose-50 to-purple-50"></div>

            {/* 裝飾性背景元素 */}
            <div className="fixed inset-0 opacity-30">
                <div className="absolute -left-4 top-1/4 h-64 w-64 rounded-full bg-orange-200 blur-3xl"></div>
                <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-rose-200 blur-3xl"></div>
                <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-purple-200 blur-3xl"></div>
            </div>

            {/* 主要內容 */}
            <div className="relative z-10">
                <Header />
                <main className="mx-auto max-w-7xl px-4">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AppLayout
