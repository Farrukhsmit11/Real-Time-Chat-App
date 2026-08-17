import React, { useState } from 'react'
import "./Dashboard.css"
import { ChatList, ChatWindow } from '../../components'
import { useSelector } from 'react-redux'
import EmptyChat from '../../components/emptyChat/EmptyChat'

const Dashboard = () => {

    const { selectedUser } = useSelector((state) => state.chat)

    return (
        <div className='chats-page'>
            <ChatList />

            {selectedUser ? (
                <ChatWindow />
            ) : (
                <EmptyChat />
            )}
        </div>
    )
}

export default Dashboard    