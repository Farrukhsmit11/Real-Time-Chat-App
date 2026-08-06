import { Avatar, Layout } from "antd"
import Sider from "antd/es/layout/Sider"
import { useState } from "react"
import { SideBar } from "../../components"
import { Content } from "antd/es/layout/layout"
import sideBarLogo from "../../assets/Logo.svg"
import { useDispatch, useSelector } from "react-redux"
import "./PageWrapper.css"
import { useNavigate } from "react-router-dom"
import UserAvatar from "../../components/userAvatar/UserAvatar"

const PageWrapper = ({ children }) => {

    const { selectedUser } = useSelector((state) => state.chat)

    return (
        <Layout hasSider>
            <Sider width={100} className='sidebar'>
                <div className="sidebar-container">
                    <div className="sidebar-header">
                        <img src={sideBarLogo} className='logo' />
                    </div>

                    <div className="sidebar-body">
                        <SideBar selectedUser={selectedUser} />
                    </div>

                    <div className="sidebar-footer">
                        <UserAvatar size={50} src="https://i.pravatar.cc/150?img=12"></UserAvatar>
                    </div>
                </div>
            </Sider>

            <Layout>
                <Content>{children}</Content>
            </Layout>
        </Layout>
    )
}

export default PageWrapper