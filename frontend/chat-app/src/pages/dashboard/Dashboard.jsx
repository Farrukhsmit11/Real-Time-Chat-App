import React from 'react'
import Sidebar from '../../components/sideBar/Sidebar'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <>
            <div className='sidebar-container'>
                <Layout hasSider>
                    <Sidebar />
                    <main className='content-area'>
                        <Outlet />
                    </main>
                </Layout>
            </div>


        </>
    )
}

export default Dashboard