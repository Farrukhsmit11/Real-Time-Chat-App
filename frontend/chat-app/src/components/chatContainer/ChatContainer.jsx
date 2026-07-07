import React from 'react'
import "./ChatContainer.css"

const ChatContainer = ({selectedUser}) => {
    return (
        <div className='chat-container'>
            <div className="chat-header">
                <div>
                    <h4>Martin Johnson</h4>
                    <span className="online-status">
                        <span className="status-dot"></span>
                        Online
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ChatContainer