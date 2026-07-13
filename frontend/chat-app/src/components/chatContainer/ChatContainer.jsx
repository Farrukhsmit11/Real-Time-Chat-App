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
import axios from "axios"
import UserAvatar from '../userAvatar/UserAvatar';
import { TbTrash } from 'react-icons/tb';


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

    const receiverId = selectedUser?._id

    const handleSendMessage = async () => {
        try {
            const data = await axios.post(`${BASE_URL}/send-message`, {
                text,
                receiverId
            },
                { withCredentials: true }
            );

            setText("")
            const res = data?.data.data
            message.success("Message send sucessfully")
        } catch (error) {
            if (error.response) {
                message.error(error.response.data.message)
            }
            console.error("error")
        }
    }

    return (
        <div className='chat-container'>
            <div className="chat-header">
                <div className='chat-content'>
                    <UserAvatar />
                    <div>
                        <h2 className='user-name'>{selectedUser.name}</h2>
                        <span className='online-status'>
                            Online
                        </span>
                    </div>
                </div>

                <div className="chat-icons">
                    <PhoneOutlined className='header-icons' />
                    <IoVideocamOutline className='header-icons' />
                    {/* <Popover content={content} trigger="hover" overlayClassName='custom-popover' color="171E2F"> */}
                    <SlOptionsVertical className='header-icons' />
                    {/* </Popover> */}
                </div>
            </div>

            <div className="messages-section">
                {messages.map((item) => {
                    return (
                        <div className="chat-main">
                            <h1 style={{ color: 'white' }}>{item.text}</h1>
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
                        <Button className='message-submit-btn' icon={
                            <LuSend className='send-icon' />
                        }
                            onClick={() => handleSendMessage()}
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