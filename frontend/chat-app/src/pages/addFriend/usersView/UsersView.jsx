import { Button, message, Table, Tag } from 'antd';
import UserAvatar from '../../../components/userAvatar/UserAvatar';
import { PlusOutlined } from '@ant-design/icons';
import "./UsersView.css"
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../store/features/users/userThunk';
import { useEffect, useState } from 'react';
import { sendRequest } from '../../../store/features/requests/requestThunk';

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',
        name: record.name,
    }),
};


const UsersView = () => {

    const [selectionType, setSelectionType] = useState('checkbox');


    const columns = [
        {
            title: 'Name',
            dataIndex: 'avatar',
            key: 'user',
            render: (url, record) => (
                <div className='avatar-name-main'>
                    <UserAvatar src={url} className='user-avatar' name={record.name} />
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
            render: (text) => text ? new Date(text).toLocaleDateString() : ""
        },

        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (_, record) => {
                return (
                    <div className='buttons-main'>
                        <Button
                            onClick={() => handleSend(record)}
                            className='send-request-btn'
                            icon={<PlusOutlined />}
                        >
                            Send Request
                        </Button>
                    </div>
                )
            }
        },
    ];

    const { users, loading, error } = useSelector((state) => state.users)

    const handleSend = async (record) => {
        try {
            await dispatch(sendRequest({
                receiverId: record._id
            })).unwrap()
            message.success(`Request Has Been Send to ${record.name}`)
        } catch (error) {
            message.error(error)
            console.error("Error while sending req", error)
        }
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <div className='table-container'>
            <Table
                dataSource={users}
                rowSelection={{ type: selectionType, ...rowSelection }}
                loading={loading}
                columns={columns}
                rowKey="_id"
            />
        </div>
    )
}

export default UsersView