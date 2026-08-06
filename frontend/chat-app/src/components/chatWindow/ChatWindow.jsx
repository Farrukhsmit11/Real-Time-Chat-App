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
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { handleMessages } from '../../store/features/messages/messageThunk';

const ChatWindow = ({ onHeaderClick }) => {

    const navigate = useNavigate()

    const [open, setOpen] = useState(false);

    const { selectedUser } = useSelector((state) => state.chat)

    return (
        <>
            <div className='chat-window-container'>

                <PageHeader
                    leftContent={
                        <div className="user-details-left">
                            <div className='user-info'>
                                <h1 className='user-name'>{selectedUser?.name}</h1>
                                <span className='user-status'>{selectedUser?.status ? 'Online' : 'Offline'}</span>
                            </div>
                            <div className='user-info'>
                                <UserAvatar
                                    size={50}
                                    onClick={onHeaderClick}
                                    className='profile-avatar'
                                    src={selectedUser?.avatar}
                                />
                            </div>
                        </div>
                    }
                />

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