import React, { useState } from 'react'
import "./Dashboard.css"
import ChatList from '../../components/chatList/ChatList'
import ChatWindow from '../../components/chatWindow/ChatWindow'
import { Layout } from 'antd'

const Dashboard = () => {

    const [selectedUser, setSelectedUser] = useState(null)

    const handleSelectUser = (user) => {
        setSelectedUser(user)
    }

    return (
        <div className='dashboard'>
            {/* <ChatList /> */}
        </div>
    )
}

export default Dashboard