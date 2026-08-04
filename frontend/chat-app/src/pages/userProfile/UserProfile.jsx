import React from 'react'
import "./UserProfile.css"
import PageHeader from '../../components/pageHeader/PageHeader'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Avatar, Button, Card, Divider, List } from 'antd'
import { useNavigate } from 'react-router-dom'
import { UserOutlined, InfoCircleOutlined, MailOutlined, PhoneOutlined, PictureOutlined, TeamOutlined, StopOutlined, DeleteOutlined, LogoutOutlined, EditOutlined, RightOutlined, StarOutlined }
    from "@ant-design/icons";
import UserAvatar from '../../components/userAvatar/UserAvatar'
import { useSelector } from "react-redux"
import { MdOutlineEmail } from "react-icons/md";
import ProfileCard from '../../components/profileCard/ProfileCard'

const UserProfile = ({ setShowProfile }) => {

    const navigate = useNavigate()

    const { selectedUser } = useSelector((state) => state.chat)

    return (
        <>
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

                <div className="profile-page-cover">
                    <div className="cover-bg"></div>
                </div>
                <div className="avatar-main">
                    <UserAvatar
                        size={180}
                        src={selectedUser?.avatar}
                    />
                </div>

                <div className="profile-header">
                    <h2>{selectedUser?.name}</h2>
                    <span className="online">Online</span>
                </div>

                <div className="cards">
                    <ProfileCard
                    ></ProfileCard>
                </div>


            </div>
        </>
    )
}

export default UserProfile