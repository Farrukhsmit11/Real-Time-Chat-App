import React, { useState } from 'react'
import "./Dashboard.css"
import { ChatList, ChatWindow, EmptyChat } from '../../components'
import { useSelector } from 'react-redux'

const Dashboard = () => {

    const { selectedUser } = useSelector((state) => state.chat)

    return (
        <div className='chats-page'>
            <ChatList />

            {selectedUser ? (
                <ChatWindow onHeaderClick={() => setShowProfile(true)} />
            ) : (
                <EmptyChat />
            )}
        </div>
    )
}

export default Dashboard    