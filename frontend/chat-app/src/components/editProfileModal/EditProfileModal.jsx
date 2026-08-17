import React from 'react'
import { Button, Divider, Form, Input, Modal } from "antd"
import "./EditProfileModal.css"

const EditProfileModal = ({ IsOpenEditModal, setIsOpenEditModal }) => {

    const [form] = Form.useForm();

    return (
        <Modal
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={IsOpenEditModal}
            className='edit-profile-modal'
            width={490}
            destroyOnClose
            onCancel={() => setIsOpenEditModal(false)}
            footer={
                null
            }
        >
            <div className="modal-header">
                <h2>Edit Profile</h2>
                <Divider />
                <p className='edit-modal-description'>Update  Profile Information</p>
            </div>

            <div className="modal-body-section">
                <Form form={form} layout='vertical'>
                    <Form.Item label={<span className='form-label'>Name</span>}>
                        <Input placeholder='Enter Name' className='form-input' name='name'></Input>

                    </Form.Item>

                    <Form.Item label={<span className='form-label'>Email</span>}>
                        <Input placeholder='Enter Email' className='form-input' type="email" name='email'></Input>
                    </Form.Item>

                    <div className='form-footer'>
                        <Button className='submit-btn'>Save Changes</Button>
                        <Button className='submit-btn-black' onClick={() => setIsOpenEditModal(false)}>Cancel</Button>
                    </div>
                </Form>
            </div>
        </Modal>
    )
}

export default EditProfileModal