import React, { useState } from 'react'
import SideBar from '../../components/sideBar/SideBar'
import "./ChatApp.css"
import ChatContainer from '../../components/chatContainer/ChatContainer'
import EmptyChat from '../../components/emptyChat/EmptyChat'
import UserAvatar from '../../components/userAvatar/UserAvatar'

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
                            <ChatContainer user={selectedUser} />
                        ) : (
                            <EmptyChat />
                        )}

                    </div>
                </div>
            </div>



            <UserAvatar />
        </>
    )
}

export default ChatApp