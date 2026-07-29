import React, { useState } from 'react'
import "./Dashboard.css"
import ChatList from '../../components/chatList/ChatList'

const Dashboard = () => {

    const [selectedUser, setSelectedUser] = useState(null)

    const handleSelectUser = (user) => {
        setSelectedUser(user)
    }

    return (
        <div className='dashboard-container'>
            <div className="dashboard-header">
                <ChatList    />
            </div>
        </div>
    )
}

export default Dashboard