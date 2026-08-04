import React, { useState } from 'react'
import "./AddFriend.css"
import PageHeader from "../../components/pageHeader/PageHeader"
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Button, Input, Radio, Select, Space, Table, Tabs } from 'antd'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { usersData } from './helper'
import { PlusOutlined } from "@ant-design/icons"
import { RxCross2 } from "react-icons/rx";

const AddFriend = () => {

    const navigate = useNavigate();

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },


        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },


        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },

        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (_, record) => {
                return (
                    <Space>
                        {/* <span>Add</span> */}
                    </Space>
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
                    <Table columns={columns} dataSource={[]} pagination={false} />
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
                                <Button className="header-back-icon" onClick={() => navigate("/")} >
                                    <FaArrowLeftLong />
                                </Button>
                            </div>
                        }

                        rightContent={
                            <div className="page-header-title">
                                <h1 className='user-profile-title'>Add Friend</h1>
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