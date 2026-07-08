import React from 'react'
import "./ChatContainer.css"
import { PhoneOutlined } from "@ant-design/icons"
import { IoVideocamOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import avatarImg from "../../assets/avatar-img.jfif"
import { Button, Input, Upload } from 'antd';
import { GrAttachment } from "react-icons/gr";
import { BsEmojiWink } from "react-icons/bs";
import { LuChartNoAxesColumnIncreasing, LuSend } from "react-icons/lu";
import { UploadOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { ImAttachment } from "react-icons/im";
import axios from "axios"
const ChatContainer = ({ selectedUser, user }) => {

    const [messageApi, contextHolder] = message.useMessage();

    const BASE_URL = "http://localhost:5000/upload"

    const props = {
        name: 'attachment',
        action: 'http://localhost:5000/upload',
        headers: {
            authorization: 'authorization-text',
        },
             
    };

    return (
        <div className='chat-container'>
            <div className="chat-header">
                <div className='chat-content'>
                    <img className='avatar-img' src={avatarImg} />
                    <div>
                        <h2 className='user-name'>{user.name}</h2>
                        <span className='online-status'>
                            Online
                        </span>
                    </div>
                </div>

                <div className="chat-icons">
                    <PhoneOutlined className='header-icons' />
                    <IoVideocamOutline className='header-icons' />
                    <SlOptionsVertical className='header-icons' />
                </div>
            </div>


            <div className="messages-section">

            </div>

            <div className="send-message-section">
                <Input
                    className='send-message-input'
                    placeholder='Type a message'

                    suffix={<LuSend className='send-icon' />}
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