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

const profileItems = [
    {
        icon: <UserOutlined />,
        title: "Name",
        value: "Farrukh Mansoor",
        editable: true,
    },
    {
        icon: <InfoCircleOutlined />,
        title: "About",
        value: "Building something amazing 🚀",
        editable: true,
    },
    {
        icon: <MailOutlined />,
        title: "Email",
        value: "farrukh@gmail.com",
    },
    {
        icon: <PhoneOutlined />,
        title: "Phone",
        value: "+92 3001234567",
    },
];

const UserProfile = () => {

    const navigate = useNavigate()

    return (
        <div className='user-profile-container'>
            <div className="user-profile-header">
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
                            <h1 className='user-profile-title'>User Profile</h1>
                        </div>
                    }
                />

                <div className="profile-section-main">
                    <div className="user-avatar-wrapper">
                        <UserAvatar
                            size={200}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5v0tocLtdcVrsfwZkfPHoDkLThWWgVyduWNkMV_dwg&s"
                        />
                        <div className="camera-option">
                            <FaCamera />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile