import { Avatar } from 'antd'
import React from 'react'

const UserAvatar = ({ src, name, size, className = "" }) => {
    return (
        <Avatar size={size} src={src} className={className}></Avatar>
    )
}

export default UserAvatar