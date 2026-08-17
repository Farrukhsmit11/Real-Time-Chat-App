import React from 'react'
import "./EmptyChat.css"
import emptyImg from "../../assets/empty-chat-img.png"
import { Divider } from "antd"

const EmptyChat = () => {
    return (
        <div className='empty-chat-container'>
            <div className="empty-chat-main">
                <img src={emptyImg} className='empty-chat-logo' />

                <div className="empty-chat-content">
                    <h1>Welcome to <span className='text-blue'>Q</span>Chat</h1>
                </div>

                <p className='empty-chat-description'>Easier way to Connect Others</p>

            </div>
        </div>
    )
}

export default EmptyChat