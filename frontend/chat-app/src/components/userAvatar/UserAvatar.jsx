import React from 'react'
import { getInitials, colors } from '../../utils/helper'
import "./UserAvatar.css"
import { Avatar } from 'antd'


const UserAvatar = ({ name }) => {
    return (
        <Avatar
            size={45}
            className='user-avatar'
        >
            {getInitials(name)}
        </Avatar>
    )
}

export default UserAvatar