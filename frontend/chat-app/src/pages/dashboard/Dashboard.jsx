import React, { useState } from 'react'
import "./Dashboard.css"
import { ChatList, ChatWindow } from '../../components'
import { useSelector } from 'react-redux'

const Dashboard = () => {

    const { selectedUser } = useSelector((state) => state.chat)

    return (
        <div className='chats-page'>
            <ChatList />

            {selectedUser ? (
                <ChatWindow />
            ) : (
                ""
            )}
        </div>
    )
}

export default Dashboard    