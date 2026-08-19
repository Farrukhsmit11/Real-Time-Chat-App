import React, { useEffect, useState } from 'react'
import "./ChatWindow.css"
import { data } from '../chatList/helper';
import { IoMdCall } from "react-icons/io";
import { Button, Input, Skeleton, Upload } from 'antd';
import { LiaUserSolid } from "react-icons/lia";
import { PaperClipOutlined, UploadOutlined } from '@ant-design/icons';
import { IoIosSend } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import PageHeader from "../pageHeader/PageHeader";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { messages } from './helper';

const ChatWindow = ({ ...headerProps }) => {

    const navigate = useNavigate()

    const [open, setOpen] = useState(false);

    const { selectedUser } = useSelector((state) => state.chat)

    const [messagesLoading, setMessagesLoading] = useState(false)

    const filteredMessages = messages.filter((message) => {
        return (
            message.senderId === selectedUser?.id ||
            message.receiverId === selectedUser?.id
        )
    })

    return (
        <>
            <div className='chat-window-container'>
                <div className="header-section">
                    <PageHeader
                        user={selectedUser}
                    />
                </div>

                <div className="messages-container">

                    {filteredMessages.map((msg) => {

                        const isSent = msg.senderId === selectedUser?.id;

                        return (
                            <div
                                key={msg.id}
                                className={
                                    isSent
                                        ? "message-row message-row-sent"
                                        : "message-row message-row-received"
                                }
                            >
                                <div
                                    className={
                                        isSent
                                            ? "message-bubble message-bubble-sent"
                                            : "message-bubble message-bubble-received"
                                    }
                                >
                                    <span className="message-text">
                                        {msg.text}
                                    </span>

                                    <span className="message-time">
                                        {msg.time}
                                    </span>
                                </div>
                            </div>
                        );
                    })
                    }
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