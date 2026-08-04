import { Card } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import "./ProfileCard.css"

const ProfileCard = ({
    title,
    key,
    icon,
    label,
    field
}) => {

    const { selectedUser } = useSelector((state) => state.chat)

    return (
        <Card
            className='profile-card'
        >
            <div className="profile-row">
                <div className="profile-row-left">
                </div>
                <div className="profile-row-right">
                    <h3>{title}
                    </h3>

                    <span>{selectedUser?.[field]}</span>
                </div>
            </div>
        </Card>
    )
}

export default ProfileCard