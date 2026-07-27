import React, { useState } from 'react'
import "./ChatApp.css"
import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { ChatContainer, EmptyChat, SideBar } from '../../components'

const ChatApp = () => {

    const [selectedUser, setSelectedUser] = useState(null)
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleSelectedUser = (user) => {
        setSelectedUser(user)
    }

    return (
        <>
            <div className="home-page">
                <div className="chat-layout">
                    <SideBar onSelectUser={handleSelectedUser} />

                    <div className="chat-content">
                        {selectedUser ? (
                            <ChatContainer selectedUser={selectedUser} />
                        ) : (
                            <EmptyChat />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatApp