import React from 'react'
import "./ChatWindow.css"
import { data } from "../../components/chatList/ChatList"
import { IoMdCall } from "react-icons/io";
import { Button, Input, Upload } from 'antd';
import { LiaUserSolid } from "react-icons/lia";
import { PaperClipOutlined, UploadOutlined } from '@ant-design/icons';
import { IoIosSend } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";


const messages = [
    {
        _id: "1",
        senderId: "user123",
        receiverId: "user456",
        text: "Hello"
    },
    {
        _id: "2",
        senderId: "user456",
        receiverId: "user123",
        text: "Hi!"
    },
    {
        _id: "3",
        senderId: "user123",
        receiverId: "user456",
        text: "How are you?"
    }
];


const ChatWindow = ({ selectedUser }) => {
    return (
        <>
            <div className='chat-window-container'>
                <div className="chat-window-header">
                    <div className="user-details-left">
                        <img src={selectedUser.avatar} className='profile-avatar' />

                        <div className='user-info'>
                            <h1 className='user-name'>{selectedUser.name}</h1>
                            <span className='user-status'>Online</span>
                        </div>
                    </div>

                    <div className="message-action-right">
                        <Button icon={<LiaUserSolid className='profile-icon' />} className='action-btn'>Profile</Button>
                        <Button icon={<IoMdCall className='call-icon' />} className='action-btn'>Call</Button>

                    </div>
                </div>

                <div className='messages-container'>
                    <img src={selectedUser.avatar} className='profile-avatar' />
                    {messages.map((msg) => {
                        return (
                            <div key={msg._id}>
                            </div>
                        )
                    })}
                </div>

                <div className="send-message-area">
                    <Upload>
                        <PaperClipOutlined className="upload-file-icon" />
                    </Upload>

                    <Input
                        placeholder='Type a message'
                        className='send-message-input'
                        suffix={
                            <>
                                <IoIosSend className='send-message-icon' />
                            </>
                        }
                    >
                    </Input>
                </div>
            </div>
        </>
    )
}

export default ChatWindow