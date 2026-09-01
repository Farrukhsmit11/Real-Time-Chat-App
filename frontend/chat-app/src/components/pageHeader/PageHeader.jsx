    import "./PageHeader.css"
    import { Button } from 'antd'
    import { FaArrowLeftLong } from 'react-icons/fa6'
    import { useNavigate } from 'react-router-dom'
    import { ConditionalRendering } from './../../utils/helper'
    import UserAvatar from '../userAvatar/UserAvatar'
    import { IoMdCall } from "react-icons/io";

    const PageHeader = ({ ...headerProps }) => {

        const navigate = useNavigate()

        const { title, subtitle, renderGoBack, leftContent, rightContent, user, className } = headerProps

        return (
            <div className={`page-header-container ${className || ""}`} >
            <div className="page-header">
                <div className="page-header-left">
                    <ConditionalRendering
                        condition={renderGoBack}
                        children={
                            <div className="page-header-icon">
                                <Button className='back-button' onClick={() => navigate("/")} >
                                    <FaArrowLeftLong className="header-back-icon" />
                                </Button>
                            </div>
                        }
                    />
                    {leftContent}

                </div>

                {user && (
                    <>
                        <div className='user-details-left'>
                            <div className='user-info'>
                                <h1 className='user-name'>{user.friendId?.name}</h1>
                                <span className='user-status'>{user?.status ? 'Online' : 'Offline'}</span>
                            </div>
                            <UserAvatar
                                size={50}
                                className='profile-avatar'
                                src={user?.avatar}
                                name={user.friendId?.name}
                            />
                        </div>
                        <div className="user-details-right">
                            <Button
                                className='call-btn'
                                icon={
                                    <IoMdCall className='call-icon' />
                                }>
                                Call
                            </Button>
                        </div>
                    </>

                )}

                <div className="page-header-right">
                    <ConditionalRendering
                        condition={title}
                        children={
                            <div className="page-header-title">
                                <h1 className='page-header-title-text'>{title}</h1>
                            </div>
                        }
                    />
                </div>
            </div>
            </div >
        )
    }

    export default PageHeader