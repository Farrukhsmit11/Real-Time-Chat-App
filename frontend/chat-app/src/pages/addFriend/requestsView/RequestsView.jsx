import { Button, Table } from 'antd'
import UserAvatar from '../../../components/userAvatar/UserAvatar'
import { CheckOutlined } from '@ant-design/icons'
import { RxCross2 } from "react-icons/rx";
import "./RequestsView.css"
import { handleApprove, handleReject, handleRequests } from '../../../store/features/requests/requestThunk';
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react';

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',
        name: record.name,
    }),
};

const RequestsView = () => {

    const [selectionType, setSelectionType] = useState('checkbox');

    const columns = [
        {
            title: 'Requester Name',
            dataIndex: 'avatar',
            key: 'user',
            render: (url, record) => (
                <div className='avatar-name-main'>
                    <UserAvatar src={url} className='profile-avatar' name={record.senderId?.name} />
                    <span>{record.senderId?.name}</span>
                </div>
            )
        },

        {
            title: "Requester Email",
            key: "requesterEmail",
            render: (_, record) => (
                <span>{record.senderId?.email}</span>
            )
        },

        {
            title: "Request Time",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (text) => text ? new Date(text).toLocaleDateString() : ""

        },

        {
            title: "Request Status",
            dataIndex: "status",
            key: "status",

        },

        {
            title: "Action",
            label: "actions",
            render: (_, record) => {
                return (
                    <div className='buttons-main'>
                        <Button
                            onClick={() => approveRequest(record)}
                            className='approve-btn'
                            icon={
                                <CheckOutlined className='approve-icon' />
                            }
                        >Approve
                        </Button>

                        <Button
                            danger
                            className='approve-btn-danger'
                            onClick={() => rejectRequest(record)}
                            icon={
                                <RxCross2 className='reject-icon' />
                            }>Reject</Button>
                    </div>
                )
            }
        }
    ]


    const dispatch = useDispatch()

    const { requests, loading } = useSelector((state) => state.request)

    const approveRequest = async (record) => {
        try {
            await dispatch(handleApprove({
                requestId: record._id
            })).unwrap()
        } catch (error) {
            console.error("error while approving request", error)
        }
    }

    const rejectRequest = async (record) => {
        try {
            await dispatch(handleReject({
                requestId: record._id
            })).unwrap()
        } catch (error) {
            console.error("Error while rejecting request", error)
        }
    }

    useEffect(() => {
        dispatch(handleRequests())
    }, [])

    return (
        <div className='table-container'>
            <Table
                columns={columns}
                rowSelection={{ type: selectionType, ...rowSelection }}
                // loading={loading}
                rowKey="_id"
                dataSource={requests}
                pagination={{
                    pageSize: 5,
                    showSizeChanger: false
                }}
            >
            </Table>
        </div>
    )
}

export default RequestsView