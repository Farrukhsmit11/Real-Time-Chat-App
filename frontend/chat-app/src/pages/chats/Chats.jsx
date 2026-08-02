import React from 'react'
import ChatList from '../../components/chatList/ChatList'
import "./Chats.css"
import { ChatWindow } from '../../components'

const Chats = ({selectedUser}) => {
    return (
        <div className='chats-page'>
            <ChatList />
            <ChatWindow />
        </div>
    )
}

export default Chats    