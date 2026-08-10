import React from 'react'
import "./PageHeader.css"
import { Button } from 'antd'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { ConditionalRendering } from './../../utils/helper'
import UserAvatar from '../userAvatar/UserAvatar'

const PageHeader = ({ ...headerProps }) => {

    const navigate = useNavigate()

    const { title, subtitle, renderGoBack, leftContent, rightContent, user } = headerProps

    return (
        <div className='page-header-container'>
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
                    <div className='user-details-left'>
                        <div className='user-info'>
                            <h1 className='user-name'>{user?.name}</h1>
                            <span className='user-status'>{user?.status ? 'Online' : 'Offline'}</span>
                        </div>
                        <UserAvatar
                            size={50}
                            className='profile-avatar'
                            src={user?.avatar}
                        />
                    </div>
                )}
                {leftContent}

                <div className="page-header-right">
                    <ConditionalRendering
                        condition={title}
                        children={
                            <div className="page-header-title">
                                <h1 className='add-friend-title'>{title}</h1>
                            </div>
                        }
                    />
                    {rightContent}
                </div>

            </div>
        </div>
    )
}

export default PageHeader