import React, { useState } from 'react'
import SideBar from '../../components/sideBar/SideBar'
import "./ChatApp.css"
import ChatContainer from '../../components/chatContainer/ChatContainer'
import EmptyChat from '../../components/emptyChat/EmptyChat'
import UserAvatar from '../../components/userAvatar/UserAvatar'
import pusher from '../../utils/pusher'

const ChatApp = () => {

    const [selectedUser, setSelectedUser] = useState(null)
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleSelectedUser = (user) => {
        setSelectedUser(user)
    }

    const channel = pusher.subscribe("chat-app")

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



            <UserAvatar />
      
        </>
    )
}

export default ChatApp