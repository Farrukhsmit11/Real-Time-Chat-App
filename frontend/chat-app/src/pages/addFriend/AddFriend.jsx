import React, { useState } from 'react'
import "./AddFriend.css"
import PageHeader from "../../components/pageHeader/PageHeader"
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Avatar, Button, Input, Radio, Select, Space, Table, Tabs } from 'antd'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { usersData } from './helper'
import { PlusOutlined } from "@ant-design/icons"
import { RxCross2 } from "react-icons/rx";
import UserAvatar from "../../components/userAvatar/UserAvatar"

const AddFriend = () => {

    const navigate = useNavigate();

    const columns = [
        {
            title: 'User',
            dataIndex: 'avatar',
            key: 'user',
            render: (url, record) => (
                <div className='avatar-name-main'>
                    <UserAvatar src={url} className='profile-avatar' />
                    <span>{record.name}</span>
                </div>

            )
        },


        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },


        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },

        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (_, record) => {
                return (
                    <>
                        <Button className='add-friend-btn' icon={<PlusOutlined />}>Add</Button>
                    </>
                )
            }
        },
    ];

    const items = [
        {
            key: "users",
            label: "Users",
            children: (
                <div className='table-container'>
                    <Table columns={columns} pagination={false} dataSource={usersData} />
                </div>
            )
        },
        {
            key: "requests",
            label: "Requests",
            children: (
                <div className='table-container'>
                    <Table dataSource={[]} pagination={false} />
                </div>
            )
        },
    ];

    return (
        <>
            <div className="add-friend-container">
                <div className="add-friend-header">
                    <PageHeader
                        leftContent={
                            <div className="page-header-icon">
                                <Button className='back-button' onClick={() => navigate("/")} >
                                    <FaArrowLeftLong className="header-back-icon" />
                                </Button>
                            </div>
                        }

                        rightContent={
                            <div className="page-header-title">
                                <h1 className='add-friend-title'>Add Friend</h1>
                            </div>
                        }

                    ></PageHeader>
                </div>

                <div className='table-filters'>
                    <Tabs defaultActiveKey="users" items={items} />
                </div>
            </div>
        </>
    )
}

export default AddFriend