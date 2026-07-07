import React, { useState } from 'react'
import SideBar from '../../components/sideBar/SideBar'
import "./ChatApp.css"
import ChatContainer from '../../components/chatContainer/ChatContainer'
import EmptyChat from '../../components/emptyChat/EmptyChat'

const ChatApp = () => {

    const [selectedUser, setSelectedUser] = useState(null)

    return (
        <>
            <div className="home-page">
                <div className="chat-layout">
                    <SideBar />

                    <div className="chat-content">
                        {selectedUser ? (
                            <ChatContainer />
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