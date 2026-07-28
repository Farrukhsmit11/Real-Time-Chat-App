import React from 'react'
import "./SideBar.css"
import { Avatar, Divider, Layout, Space } from "antd"
import Sider from 'antd/es/layout/Sider'
import sideBarLogo from "../../assets/sideBar-logo.svg"
import { HomeOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons"
import { LuUsers } from "react-icons/lu";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoIosSettings } from "react-icons/io";
import UserAvatar from '../userAvatar/UserAvatar'
import { TbLogout2 } from "react-icons/tb";
import { useDispatch } from "react-redux"
import { handleLogout } from "../../store/features/auth/authThunk"
import { useNavigate } from 'react-router-dom'

const SideBar = () => {

    const navItems = [
        { icon: <HomeOutlined />, label: "Home" },
        { icon: <LuUsers className="nav-icon" />, label: "Users" },
        { icon: <LuMessageCircleMore />, label: "Chats" },
        { icon: <IoIosSettings />, label: "Settings" },
    ]

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const logoutUser = () => {
        dispatch(handleLogout())
        navigate("/login")
    }

    return (
        <Layout hasSider>
            <Sider width={100} className='sidebar'>
                <div className='sidebar-logo'>
                    <img src={sideBarLogo} className='header-logo' />
                </div>

                <div className="nav-icon-main">
                    {navItems.map((item, index) => {
                        return (
                            <div className="nav-item">
                                <span className='nav-icon'>{item.icon}</span>
                            </div>
                        )
                    })}
                </div>

                <div className="sidebar-inner">
                    <PlusOutlined className='add-new-chat-icon' />
                    <TbLogout2 className='logout-icon' onClick={() => logoutUser()} />
                </div>
            </Sider>
        </Layout>
    )
}

export default SideBar