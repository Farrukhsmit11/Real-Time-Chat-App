import React, { useState } from 'react'
import "./Dashboard.css"
import { ChatList, ChatWindow, EmptyChat } from '../../components'
import { useSelector } from 'react-redux'
import UserProfile from '../userProfile/UserProfile'

const Dashboard = () => {

    const { selectedUser } = useSelector((state) => state.chat)
    const [showProfile, setShowProfile] = useState(false);

    const handleProfileClick = () => {
        showProfile(true)
    }

    const handleCloseProfile = () => {
        showProfile(false)
    }

    return (
        <div className='chats-page'>
            <ChatList />

            {selectedUser ? (
                showProfile ? (
                    <UserProfile setShowProfile={setShowProfile} />
                ) : (
                    <ChatWindow onHeaderClick={() => setShowProfile(true)} />
                )
            ) : (
                <EmptyChat />
            )}

        </div>
    )
}

export default Dashboard    