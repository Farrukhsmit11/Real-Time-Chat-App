import { Avatar } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux';
import { getInitials } from '../../utils/helper';

const UserAvatar = ({ src, name, size, className = "", onClick, children, ...props }) => {

    const { user } = useSelector((state) => state.auth)
    const loggedInUser = user?.user;


    return (
        <Avatar size={size} src={src} className={className} onClick={onClick} {...props}>
            {getInitials(loggedInUser?.name)}
        </Avatar>
    )
}

export default UserAvatar