import React from 'react'
import "./UserProfile.css"
import PageHeader from '../../components/pageHeader/PageHeader'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Button, Card, List } from 'antd'
import { FaCamera } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { UserOutlined, InfoCircleOutlined, MailOutlined, PhoneOutlined, PictureOutlined, TeamOutlined, StopOutlined, DeleteOutlined, LogoutOutlined, EditOutlined, RightOutlined }
    from "@ant-design/icons";
import UserAvatar from '../../components/userAvatar/UserAvatar'


const UserProfile = ({setShowProfile}) => {

    const navigate = useNavigate()

    return (
        <div className='user-profile-container'>
            <div className="user-profile-header">
                <PageHeader
                    leftContent={
                        <div className="page-header-icon">
                            <Button className="header-back-icon" onClick={() => setShowProfile(false)} >
                                <FaArrowLeftLong />
                            </Button>
                        </div>
                    }

                    rightContent={
                        <div className="page-header-title">
                            <h1 className='user-profile-title'>User Profile</h1>
                        </div>
                    }
                />
            </div>
        </div>
    )
}

export default UserProfile