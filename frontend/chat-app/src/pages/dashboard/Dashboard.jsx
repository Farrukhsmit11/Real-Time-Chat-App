import React, { useEffect, useState } from 'react'
import "./Dashboard.css"
import SideBar from '../../components/sideBar/SideBar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {

    return (
        <div className='dashboard-layout'>
            <div className='sidebar-container'>
                <SideBar />
            </div>
            <main className='content-area'>
                <Outlet />
            </main>
        </div>

    )
}

export default Dashboard