import { Avatar, Layout } from "antd"
import Sider from "antd/es/layout/Sider"
import { useState } from "react"
import { SideBar } from "../../components"
import { Content } from "antd/es/layout/layout"
import ProfileModal from "../../components/profileModal/ProfileModal"
import sideBarLogo from "../../assets/Logo.svg"
import { useDispatch } from "react-redux"
import "./PageWrapper.css"
import { useNavigate } from "react-router-dom"

const PageWrapper = ({ children }) => {
    const [selectedUser, setSelectedUser] = useState(null)
    const [isOpenProfileModal, setIsOpenProfileModal] = useState(false)

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

                <SideBar
                    selectedUser={selectedUser}
                    setSelectedUser={setSelectedUser}
                />

                <div className="sidebar-body">
                    <div className="sidebar-bottom">
                        <Avatar
                            size={50}
                            onClick={() => navigate("/userProfile")}
                            src="https://i.pravatar.cc/150?img=12"
                        />
                    </div>
                </div>
            </Sider>

            <Layout>
                <Content>{children}</Content>
            </Layout>

            <ProfileModal
                isOpenProfileModal={isOpenProfileModal}
                setIsOpenProfileModal={setIsOpenProfileModal}
                selectedUser={selectedUser}
            />
        </Layout>
    )
}

export default PageWrapper