import React, { useState } from 'react'
import "./Dashboard.css"
import SideBar from '../../components/sideBar/SideBar'
import ChatList from '../../components/chatList/ChatList'

const Dashboard = () => {

    const [selectedUser , setSelectedUser] = useState(null)

    const handleSelectUser = (user) => {
        setSelectedUser(user)
    }

    return (
        <div className='dashboard-container'>
            <div className="dashboard-header">
                <SideBar onSelectUser={handleSelectUser} />
            </div>

            <div className="chat-container">
                <ChatList/>
            </div>
        </div>
    )
}

export default Dashboard