import React from 'react'
import emptyChatLogog from "../../assets/empty-chat-logo.svg"
import "./EmptyChat.css"

const EmptyChat = () => {
    return (
        <div className='empty-chat-main'>
            <img src={emptyChatLogog} className='empty-chat-img' />
            <h1 className='empty-chat-title'>Chat anytime , anywhere</h1>
        </div>
    )
}

export default EmptyChat