import { Layout, Popover } from "antd"
import Sider from "antd/es/layout/Sider"
import { SideBar } from "../../components"
import { Content } from "antd/es/layout/layout"
import sideBarLogo from "../../assets/Logo.svg"
import { useDispatch, useSelector } from "react-redux"
import "./PageWrapper.css"
import UserAvatar from "../../components/userAvatar/UserAvatar"
import { HiOutlineLogout } from "react-icons/hi";
import { handleLogout } from "../../store/features/auth/authThunk"
import { useNavigate } from "react-router-dom"

const PageWrapper = ({ children }) => {

    const { selectedUser } = useSelector((state) => state.chat)
    const { user } = useSelector((state) => state.auth)

    const content = (
        <div className="popover-item-main">
            <p
                className="popover-item"
                style={{ margin: 0, cursor: 'pointer' }}
                onClick={() => logoutUser()}
            >
                <HiOutlineLogout className="logout-icon" /> Logout
            </p>
        </div>
    );

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutUser = async () => {
        try {
            await dispatch(handleLogout()).unwrap()

            navigate("/")

        } catch (error) {
            console.error("Error logginf out user", error)
        }
    }


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
                        <Popover
                            content={content}
                        >
                            <UserAvatar name={user.user?.name} />
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