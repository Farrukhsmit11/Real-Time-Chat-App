import { Avatar, Layout, Popover } from "antd"
import Sider from "antd/es/layout/Sider"
import { useState } from "react"
import { SideBar } from "../../components"
import { Content } from "antd/es/layout/layout"
import sideBarLogo from "../../assets/Logo.svg"
import { useDispatch, useSelector } from "react-redux"
import "./PageWrapper.css"
import { useNavigate } from "react-router-dom"
import UserAvatar from "../../components/userAvatar/UserAvatar"
import { FiUser } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { handleLogout } from "../../store/features/auth/authThunk"
import { IoIosNotificationsOutline } from "react-icons/io"

const PageWrapper = ({ children }) => {

    const { selectedUser } = useSelector((state) => state.chat)

    const dispatch = useDispatch()

    const LogoutUser = async () => {
        dispatch(handleLogout())
    }

    const navigate = useNavigate();

    const content = (
        <div className="popover-content-main">
            <h3 style={{ margin: 0 }} className="content-item" onClick={() => navigate("/userProfile")} > <FiUser className="popover-icon" />  Profile</h3>
            <div className="content-item">
                <h3
                    style={{ margin: 0 }}
                    onClick={() => LogoutUser()}
                    className="content-item"> <TbLogout2 className="logout-icon" />Logout</h3>
            </div>
        </div>
    );

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
                        <Popover content={content} trigger="hover">
                            <UserAvatar
                                size={53}
                            >
                            </UserAvatar>
                        </Popover>
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