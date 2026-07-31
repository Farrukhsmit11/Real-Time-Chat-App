import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { Content, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import { PlusOutlined } from '@ant-design/icons'
import { TbLogout2 } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { handleLogout } from "../../store/features/auth/authThunk"
import "./PageWrapper.css"
import { MdNotificationsNone } from "react-icons/md";
import SideBar from '../../components/sideBar/SideBar'
import { ChatList, ChatWindow } from '../../components'
import sideBarLogo from "../../assets/Logo.svg"
import { IoSettingsOutline } from 'react-icons/io5'
import EmptyChat from '../../components/emptyChat/EmptyChat'

const PageWrapper = ({ children }) => {

    const [selectedUser, setSelectedUser] = useState(null)

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
                    <img src={sideBarLogo} className='logo' />
                </div>

                <SideBar />

                <div className="sidebar-body">
                    <TbLogout2 className='logout-icon' onClick={() => logoutUser()} />
                </div>
            </Sider>

            <Layout>
                <Content style={{ display: "flex" }}>
                    <ChatList selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
                    {selectedUser ? <ChatWindow selectedUser={selectedUser} /> : <EmptyChat />}
                </Content>
            </Layout>
        </Layout>
    )
}

export default PageWrapper