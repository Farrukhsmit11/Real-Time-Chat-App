import React, { useState } from 'react'
import "./ChatWindow.css"
import { data } from "../../components/chatList/ChatList"
import { IoMdCall } from "react-icons/io";
import { Button, Input, Upload } from 'antd';
import { LiaUserSolid } from "react-icons/lia";
import { PaperClipOutlined, UploadOutlined } from '@ant-design/icons';
import { IoIosSend } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import ProfileModal from '../profileModal/ProfileModal';
import PageHeader from "../pageHeader/PageHeader"
import UserAvatar from '../userAvatar/UserAvatar';

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
]

const ChatWindow = ({ selectedUser }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='chat-window-container'>
                <PageHeader
                    leftContent={
                        <div className="user-details-left">

                            <div className='user-info'>
                                <UserAvatar
                                    size={50}
                                    onClick={() => setOpen(true)}
                                    className='profile-avatar'
                                    src={
                                        "https://i.pravatar.cc/150?img=12"
                                    }>
                                </UserAvatar>
                            </div>
                        </div>
                    }

                    rightContent={
                        <div className="message-action-right">
                            <Button icon={<IoMdCall className='call-icon' />} className='action-btn'>Call</Button>
                        </div>
                    }
                />

                <div className='messages-container'>
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
            </div >

            <ProfileModal
                selectedUser={selectedUser}
                isOpenProfileModal={open}
                setIsOpenProfileModal={setOpen}
            />
        </>
    )
}

export default ChatWindow