import React from 'react'
import './ProfileModal.css'
import { Modal } from 'antd'
import { useSelector } from 'react-redux'

const ProfileModal = ({ isOpenProfileModal, setIsOpenProfileModal }) => {

    const { selectedUser } = useSelector((state) => state.chat)

    return (
        <Modal
            className='Profile Details'
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isOpenProfileModal}
            width={436}
            onCancel={() => setIsOpenProfileModal(false)}
            footer={
                null
            }
        >
            <div className='modal-body'>
                <img src={selectedUser?.avatar} className='modal-avatar' />
            </div>


        </Modal>
    )
}

export default ProfileModal