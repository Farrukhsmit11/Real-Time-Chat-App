import { Button, Table, Tag } from 'antd'
import UserAvatar from '../../../components/userAvatar/UserAvatar'
import { CheckOutlined } from '@ant-design/icons'
import { RxCross2 } from "react-icons/rx";
import "./RequestsView.css"
import { handleRequests } from '../../../store/features/requests/requestThunk';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';

const RequestsView = () => {

    const columns = [
        {
            title: 'Requester Name',
            dataIndex: 'avatar',
            key: 'user',
            render: (url, record) => (
                <div className='avatar-name-main'>
                    <UserAvatar src={url} className='profile-avatar' />
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
            key: "createdAt"

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


    const dispatch = useDispatch()

    const { requests, loading } = useSelector((state) => state.request)

    useEffect(() => {
        dispatch(handleRequests())
    }, [dispatch])

    return (
        <div className='table-container'>

            <Table
                columns={columns}
                loading={loading}
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