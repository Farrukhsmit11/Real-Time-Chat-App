import { Button, Table, Tag } from 'antd'
import React from 'react'
import { requestsData } from '../helper'
import UserAvatar from '../../../components/userAvatar/UserAvatar'
import { CheckOutlined } from '@ant-design/icons'
import { RxCross2 } from "react-icons/rx";
import "./RequestsView.css"

const RequestsView = () => {

    const columns = [
        {
            title: 'Requester Name',
            dataIndex: 'avatar',
            key: 'user',
            render: (url, record) => (
                <div className='avatar-name-main'>
                    <UserAvatar src={url} className='profile-avatar' />
                    <span>{record.requesterName}</span>
                </div>
            )
        },

        {
            title: "Requester Email",
            dataIndex: "requesterEmail",
            label: "requesterEmail"
        },

        {
            title: "Request Time",
            dataIndex: "requestTime",
            label: "requesteTime"

        },

        {
            title: "Request Status",
            dataIndex: "status",
            key: "status",

            render: (status) => {
                let color = "gray"

                if (status === "Approved") color = "blue";
                if (status === "Pending") color = "green"
                if (status === "Rejected") color = "red";
                return (
                    <Tag color={color} className='custom-tag'>
                        {status}
                    </Tag>
                )
            }
        },

        {
            title: "Action",
            label: "actions",
            render: (_, record) => {
                return (
                    <div className='buttons-main'>
                        <Button
                            className='approve-btn'
                            icon={
                                <CheckOutlined />
                            }>Approve
                        </Button>

                        <Button
                            className='reject-btn'
                            icon={
                                <RxCross2 className='reject-icon' />
                            }>Reject</Button>
                    </div>

                )
            }
        }
    ]

    return (
        <div className='table-container'>
            <Table
                columns={columns}
                rowKey="_id"
                pagination={{
                    pageSize: 5,
                    showSizeChanger: false
                }}
                dataSource={requestsData}></Table>
        </div>
    )
}

export default RequestsView