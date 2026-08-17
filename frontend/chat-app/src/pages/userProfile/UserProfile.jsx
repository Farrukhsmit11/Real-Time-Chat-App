import React, { useEffect, useState } from 'react'
import "./UserProfile.css"
import PageHeader from '../../components/pageHeader/PageHeader'
import { useDispatch, useSelector } from 'react-redux'
import ProfileCard from '../../components/profileCard/ProfileCard'
import EditProfileModal from '../../components/editProfileModal/EditProfileModal'

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

            <div className="user-profile-content">
                <ProfileCard user={user} onEditModal={() => setIsOpen(true)}></ProfileCard>
            </div>

            <EditProfileModal
                IsOpenEditModal={IsOpen}
                setIsOpenEditModal={setIsOpen} />
        </>
    )
}

export default UserProfile