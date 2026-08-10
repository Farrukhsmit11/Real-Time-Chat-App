import { Avatar } from 'antd'
import React from 'react'

const UserAvatar = ({ src, name, size, className = "", onClick, ...props }) => {
    return (
        <Avatar size={size} src={src} className={className} onClick={onClick} {...props}>
        </Avatar>
    )
}

export default UserAvatar