import { Button, Table, Tag } from 'antd';
import React from 'react'
import { usersData } from '../helper';
import UserAvatar from '../../../components/userAvatar/UserAvatar';
import { PlusOutlined } from '@ant-design/icons';

const UsersView = () => {

    const columns = [
        {
            title: 'Name',
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
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },


        {
            title: 'User Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                let color = "default"

                if (status === "active") color = "red";
                if (status === "inactive") color = "blue";

                return (
                    <Tag color={color}>
                        {status}
                    </Tag>
                )

            }
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


    return (
        <div className='table-container'>
            <Table columns={columns} dataSource={usersData} />
        </div>
    )
}

export default UsersView