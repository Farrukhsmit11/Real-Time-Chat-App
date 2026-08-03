import { Avatar } from 'antd'
import React from 'react'

const UserAvatar = ({ src, name, size, className = "", onClick }) => {
    return (
        <Avatar size={size} src={src} className={className} onClick={onClick}></Avatar>
    )
}

export default UserAvatar