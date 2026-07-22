import React, { useState } from 'react'
import "./ChatContainer.css"
import { PhoneOutlined } from "@ant-design/icons"
import { IoVideocamOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import avatarImg from "../../assets/avatar-img.jfif"
import { Button, Divider, Input, Popover, Upload } from 'antd';
import { GrAttachment } from "react-icons/gr";
import { BsEmojiWink } from "react-icons/bs";
import { LuChartNoAxesColumnIncreasing, LuSend } from "react-icons/lu";
import { UploadOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { ImAttachment } from "react-icons/im";
import { TbTrash } from 'react-icons/tb';
import { useEffect } from 'react';
import UserAvatar from '../userAvatar/UserAvatar';
import { useDispatch } from "react-redux"
import { handleSendMessage } from '../../store/features/messages/messageThunk';
import { get } from '../../utils/apiMethod';


const ChatContainer = ({ selectedUser }) => {

    const [messageApi, contextHolder] = message.useMessage();

    const BASE_URL = "http://localhost:5000"

    const [messages, setMessages] = useState([])
    const [text, seText] = useState([])

    const props = {
        name: 'attachment',
        action: 'http://localhost:5000/upload',
        headers: {
            authorization: 'authorization-text',
        },

    };

    const dispatch = useDispatch()

    const receiverId = selectedUser?._id

    const sendMessage = async () => {
        dispatch(handleSendMessage({
            text,
            receiverId
        }))
    }

    const handleMessages = async () => {
        try {
            const res = await get(`${BASE_URL}/messages/${receiverId}`, {
                withCredentials: true
            })
        } catch (error) {
            console.error("Error fetching messages")
        }
    }

    useEffect(() => {
        if (receiverId) {
            setMessages([])
            handleMessages()
        }
    }, [receiverId])

    return (
        <div className='chat-container'>
            <div className="chat-header">
                <div className='chat-content'>
                    <div className='chat-header-section'>
                        <UserAvatar />
                        <div>
                            <h2 className='user-name'>{selectedUser.name}</h2>
                            <span className='online-status'>
                                Online
                            </span>
                        </div>
                    </div>
                </div>

                <div className="chat-icons">
                    <PhoneOutlined className='header-icons' />
                    <IoVideocamOutline className='header-icons' />
                    <SlOptionsVertical className='header-icons' />
                </div>
            </div>


            <div className="messages-section">
                {messages.map((item) => {
                    return (
                        <div className="conversation-list sender">
                            <div className="message-bubble">
                                <span className="message-text">{item.text}</span>

                                <Button

                                    icon={
                                        <SlOptionsVertical />
                                    }
                                    className='message-menu'></Button>

                                <div className="message-footer">
                                    <span className="message-time">
                                    </span>

                                    <span className="message-status">✓</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="send-message-section">
                <Input
                    className='send-message-input'
                    value={text}
                    onChange={(e) => seText(e.target.value)}
                    placeholder='Type a message'
                    suffix={
                        <Button
                            htmlType='submit'
                            className='message-submit-btn'
                            icon={
                                <LuSend className='send-icon' />
                            }
                            onClick={() => sendMessage()}
                        >
                        </Button>
                    }
                    prefix={
                        <Upload {...props} name='attachment'>
                            <Button icon={<ImAttachment />} className='upload-btn'></Button>
                        </Upload>
                    }
                >
                </Input>
            </div>
        </div >
    )
}

export default ChatContainer