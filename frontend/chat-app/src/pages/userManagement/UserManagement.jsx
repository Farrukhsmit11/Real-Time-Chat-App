import React from 'react'
import { Button, Table } from "antd"
import { Header } from 'antd/es/layout/layout'
import "./UserManagement.css"

const UserManagement = () => {
    return (
        <div className='container'>
            <div className="dashboard-header">
                <h1 className='dashboard-home-title'>User Management</h1>
                <Button type='primary'>Add User</Button>
            </div>
        </div>
    )
}

export default UserManagement