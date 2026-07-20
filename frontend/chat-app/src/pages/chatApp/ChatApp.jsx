import React, { useState } from 'react'
import SideBar from '../../components/sideBar/SideBar'
import "./ChatApp.css"
import ChatContainer from '../../components/chatContainer/ChatContainer'
import EmptyChat from '../../components/emptyChat/EmptyChat'
import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'

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