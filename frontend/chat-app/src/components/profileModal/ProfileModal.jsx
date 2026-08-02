import React from 'react'
import './ProfileModal.css'
import { Avatar, Button, Divider, Modal } from 'antd';
import { useState } from 'react';
import { LuTrash2 } from "react-icons/lu";
import { data } from "../../components/chatList/ChatList"

const ProfileModal = ({ isOpenProfileModal, setIsOpenProfileModal, selectedUser }) => {

    return (
        <Modal
            className='Profile Details'
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isOpenProfileModal}
            width={400}
            destroyOnClose={true}
            onCancel={() => setIsOpenProfileModal(false)}
            footer={
                null
            }
        >
            <div className='profile-modal-header'>
                <Avatar
                    size={90}
                    onClick={() => navigate("/userProfile")}
                    className='profile-avatar'
                    src={
                        "https://i.pravatar.cc/150?img=12"
                    }></Avatar>
            </div>

            <div>
                <h1 className='user-name' style={{ margin: 0, color: '#000' }}>{selectedUser?.name}</h1>
                <label className='profile-label'>Email</label>
            </div>

            {data.map((user) => (
                <div key={user.id}>
                    <div className="modal-content">
                        <div className="form-label">
                            <span>{user.email}</span>
                        </div>
                    </div>
                </div>
            ))}
        </Modal>
    )
}

export default ProfileModal