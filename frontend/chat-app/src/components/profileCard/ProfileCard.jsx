import React, { useState } from 'react'
import "./ProfileCard.css"
import { Card, Button, Tag, Divider, Descriptions } from 'antd'
import {
    CameraOutlined, EditOutlined, PhoneOutlined, MailOutlined, CheckCircleFilled, LinkOutlined,
    IdcardOutlined,
} from '@ant-design/icons'
import UserAvatar from '../userAvatar/UserAvatar'
import {
    UserOutlined,
    CalendarOutlined,
    ClockCircleOutlined,
} from "@ant-design/icons";

const ProfileCard = ({ user, onEditModal }) => {

    return (
        <>
            <div className='profile-card-container'>
                <Card className='profile-card' bordered={false}>
                    <div className='card-cover'>
                        <div className='card-cover-overlay' />
                    </div>

                    <div className='card-body'>
                        <div className='card-body-left'>
                            <div className='card-avatar-wrap'>
                                <UserAvatar className='card-avatar' user={user} />
                                <div className='card-avatar-edit'>
                                    <CameraOutlined />
                                </div>
                            </div>

                            <div className='card-name-main'>
                                <h1 className='card-name'>
                                    {user?.user?.name || 'User Name'}
                                    <CheckCircleFilled className='card-verified' />
                                </h1>
                                <Tag className='card-status-tag' color='success'>
                                    ● Online
                                </Tag>
                            </div>

                            <Button
                                type='primary'
                                className='edit-profile-btn'
                                icon={<EditOutlined />}
                                onClick={onEditModal}
                            >
                                Edit Profile
                            </Button>
                        </div>

                        <div className='card-body-right'>
                            <h3 className='profile-section-title'>Profile Information</h3>

                            <div className="profile-details">
                                <Descriptions column={1} bordered size='middle'
                                >
                                    <Descriptions.Item label="Name">
                                        {user.user?.name}
                                    </Descriptions.Item>

                                    <Descriptions.Item label="Email">
                                        {user.user?.email}
                                    </Descriptions.Item>

                                    <Descriptions.Item label="Created At">
                                        {user.user?.createdAt}
                                    </Descriptions.Item>

                                </Descriptions>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default ProfileCard