import React from 'react'
import "./ChatList.css"
import { PlusOutlined } from "@ant-design/icons"

const ChatList = () => {
    return (
        <div className='chat-list-container'>
            <div className="chat-list-header">
                <div className="header-left">
                    <h1 className='chat-list-title'>Messages</h1>
                </div>

                <div className="header-right">
                    <div className="add-icon-main">
                        <PlusOutlined />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatList