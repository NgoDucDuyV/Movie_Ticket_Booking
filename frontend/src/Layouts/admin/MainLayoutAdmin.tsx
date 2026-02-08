import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
            <div>
                Admin Layout
                <Outlet/>
            </div>
        </>
    )
}

export default MainLayout
