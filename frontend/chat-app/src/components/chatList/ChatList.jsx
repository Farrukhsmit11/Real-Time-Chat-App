import React, { useState } from 'react'
import "./ChatList.css"
import { DownOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons"
import { Avatar, Button, Input, Tag } from 'antd'

export const data = [
    {
        id: 1,
        name: "Elmer Laverty",
        avatar: "https://i.pravatar.cc/150?img=11",
        lastMessage: "Haha that's funny 🔥",
        time: "12m",
        unread: 2,
        online: true,
        active: false,
        tags: [
            {
                label: "Question",
                color: "#FFE8CC",
                textColor: "#D97706"
            },
            {
                label: "Help Wanted",
                color: "#DCFCE7",
                textColor: "#16A34A"
            }
        ]
    },
    {
        id: 2,
        name: "Florencio Dorrance",
        avatar: "https://i.pravatar.cc/150?img=12",
        lastMessage: "Woohoooo 😄",
        time: "24m",
        unread: 0,
        online: true,
        active: true,
        tags: [
            {
                label: "Some Content",
                color: "#EEF2FF",
                textColor: "#6366F1"
            }
        ]
    },
    {
        id: 3,
        name: "Lavern Laboy",
        avatar: "https://i.pravatar.cc/150?img=13",
        lastMessage: "Haha that's terrifying 😂",
        time: "10h",
        unread: 5,
        online: false,
        active: false,
        tags: [
            {
                label: "Bug",
                color: "#FEE2E2",
                textColor: "#DC2626"
            },
            {
                label: "Hacktoberfest",
                color: "#DCFCE7",
                textColor: "#16A34A"
            }
        ]
    },
    {
        id: 4,
        name: "Titus Kitamura",
        avatar: "https://i.pravatar.cc/150?img=14",
        lastMessage: "Omg, this is amazing.",
        time: "16h",
        unread: 0,
        online: false,
        active: false,
        tags: [
            {
                label: "Question",
                color: "#FFE8CC",
                textColor: "#D97706"
            },
            {
                label: "Some Content",
                color: "#F3F4F6",
                textColor: "#6B7280"
            }
        ]
    },
    {
        id: 5,
        name: "Geoffrey Mott",
        avatar: "https://i.pravatar.cc/150?img=15",
        lastMessage: "Aww ❤️",
        time: "2d",
        unread: 1,
        online: true,
        active: false,
        tags: [
            {
                label: "Request",
                color: "#DCFCE7",
                textColor: "#16A34A"
            }
        ]
    },
    {
        id: 6,
        name: "Alfonzo Schuessler",
        avatar: "https://i.pravatar.cc/150?img=16",
        lastMessage: "Perfect!",
        time: "1m",
        unread: 0,
        online: false,
        active: false,
        tags: [
            {
                label: "Follow Up",
                color: "#E0E7FF",
                textColor: "#4338CA"
            }
        ]
    }
];


const ChatList = ({ selectedUser, setSelectedUser }) => {

    const [active, setActive] = useState(null)

    return (
        <div className="chat-list-container">
            <div className="chat-list-header">
                <div className="header-left">
                    <h1 className="chat-list-title">
                        Messages <DownOutlined className="chat-list-title-icon" />
                    </h1>

                    <div className="message-count">
                        <span className='count'>12</span>
                    </div>
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
                            onClick={() => setSelectedUser(item)}
                        >
                            <img src={item.avatar} className='profile-avatar' />
                            <div className="chat-content">
                                <div className="profile-detail-left">
                                    <h1 className='profile-name'>
                                        {item.name}
                                    </h1>
                                    <span className='status'>{item.time}</span>

                                </div>

                                <span className='last-message'>{item.lastMessage}</span>

                                <div className="tag-section">

                                </div>

                            </div>
                        </div>
                    )

                    {
                        item.tags.map((tag) => {
                            return (
                                <div className='chats-tag'>
                                    <Tag></Tag>
                                </div>
                            )
                        })
                    }
                })}
            </div>
        </div>
    )
}
export default ChatList