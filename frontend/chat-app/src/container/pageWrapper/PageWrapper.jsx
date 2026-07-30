import { Layout, Menu } from 'antd'
import React from 'react'
import { Content, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import { PlusOutlined } from '@ant-design/icons'
import { TbLogout2 } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import sideBarLogo from "../../assets/logo1.png"
import { handleLogout } from "../../store/features/auth/authThunk"
import "./PageWrapper.css"
import { MdNotificationsNone } from "react-icons/md";
import SideBar from '../../components/sideBar/SideBar'
import ChatList from '../../components/chatList/ChatList'
import ChatWindow from '../../components/chatWindow/ChatWindow'

const PageWrapper = ({ children }) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const logoutUser = () => {
        dispatch(handleLogout())
        navigate("/login")
    }

    return (
        <Layout hasSider>
            <Sider width={100} className='sidebar'>
                {/* <div className='sidebar-logo'> */}
                {/* <img src={sideBarLogo} className='logo' /> */}
                {/* </div> */}

                <SideBar />

                <div className="sidebar-body">
                    <PlusOutlined className='add-new-chat-icon' />
                    <TbLogout2 className='logout-icon' onClick={() => logoutUser()} />
                </div>
            </Sider>

            <Layout>
                <Content >
                    <ChatList />
                    <ChatWindow />
                </Content>
            </Layout>


        </Layout>
    )
}

export default PageWrapper