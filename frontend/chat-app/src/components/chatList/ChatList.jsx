import React, { useState } from 'react'
import "./ChatList.css"
import { DownOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons"
import { Avatar, Button, Input, Tag } from 'antd'
import UserAvatar from '../userAvatar/UserAvatar';
import { data } from './helper';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser, clearSelectedUser } from '../../store/features/chats/chatSlice';

const ChatList = ({ setShowProfile }) => {

    const [active, setActive] = useState(null)
    const dispatch = useDispatch()

    return (
        <div className="chat-list-container">
            <div className="chat-list-header">
                <div className="header-left">
                    <h1 className="chat-list-title">
                        Messages <DownOutlined className="chat-list-title-icon" />
                    </h1>
                </div>

                <div className="header-right">
                    <Button
                        type="button"
                        className="chat-list-add-btn"
                        aria-label="New message"
                    >
                        <PlusOutlined className='plus-icon' />
                    </Button>
                </div>
            </div>

            <div className="input-group">
                <Input placeholder='Search messages' className='search-input' suffix={<SearchOutlined className='search-icon' />}></Input>
            </div>

            <div className="chat-list-section">
                {data.map((item) => {
                    return (
                        <div
                            className={`chat-card ${active === item.id ? "active" : ""}`}
                            key={item.id}
                            onClick={() => {
                                dispatch(setSelectedUser(item))
                            }
                            }
                        >
                            <UserAvatar src={item.avatar} className='profile-avatar' />

                            <div className="chat-content">
                                <div className="profile-detail-left">
                                    <h1 className='profile-name'>
                                        {item.name}
                                    </h1>
                                    <span className='status'>{item.time}</span>
                                </div>
                                <span className='last-message'>{item.lastMessage}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ChatList