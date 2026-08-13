import React, { useEffect, useState } from 'react'
import "./ChatWindow.css"
import { data } from '../chatList/helper';
import { IoMdCall } from "react-icons/io";
import { Button, Input, Upload } from 'antd';
import { LiaUserSolid } from "react-icons/lia";
import { PaperClipOutlined, UploadOutlined } from '@ant-design/icons';
import { IoIosSend } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import PageHeader from "../pageHeader/PageHeader"
import UserAvatar from '../userAvatar/UserAvatar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { ConditionalRendering } from '../../utils/helper';
import { messages } from './helper';

const ChatWindow = ({ ...headerProps }) => {

    const navigate = useNavigate()

    const [open, setOpen] = useState(false);

    const { selectedUser } = useSelector((state) => state.chat)

    return (
        <>
            <div className='chat-window-container'>
                <div className="header-section">
                    <PageHeader
                        user={selectedUser}
                    />
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