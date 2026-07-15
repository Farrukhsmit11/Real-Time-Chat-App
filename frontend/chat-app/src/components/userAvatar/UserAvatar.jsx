import React from 'react'
import "./UserAvatar.css"
import { Avatar } from "antd"
import { getFirstTwoLetters } from '../../utils/helper.js'

const UserAvatar = ({ selectedUser }) => {
    return (
        <Avatar size="large" className='user-avatar'>
            {selectedUser?.user}
        </Avatar>
    )
}

export default UserAvatar