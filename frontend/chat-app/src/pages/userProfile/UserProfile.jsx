import React, { useEffect, useState } from 'react'
import "./UserProfile.css"
import PageHeader from '../../components/pageHeader/PageHeader'
import { useSelector } from 'react-redux'

const UserProfile = () => {

    const headerProps = {
        renderGoBack: true,
        title: "User Profile",
    }

    const [IsOpen, setIsOpen] = useState(false)

    const { user } = useSelector((state) => state.auth)

    return (
        <>
            <div className="user-profile-header">
                <PageHeader
                    {...headerProps}
                ></PageHeader>
            </div>



        </>
    )
}

export default UserProfile