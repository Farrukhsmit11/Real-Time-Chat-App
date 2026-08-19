import React, { useState } from 'react'
import "./ChangePassword.css"
import { Form as AntForm, Button, Input } from "antd"
import { useDispatch } from "react-redux"
import { handleChangePassword } from '../../../store/features/auth/authThunk'
import { useLocation } from 'react-router-dom'

const ChangePassword = () => {

    const [form] = AntForm.useForm()

    const [newPassword, setNewPassword] = useState("");

    const dispatch = useDispatch()
    const location = useLocation()

    const changedEmail = location.state?.email

    const handleChange = async () => {
        try {
            dispatch(handleChangePassword({ email: changedEmail, newPassword }))

        } catch (error) {
            console.error("error while changing password", error)
        }
    }

    return (
        <div className='auth-container'>
            <div className="auth-card">
                <div className="auth-header">
                    <h1 className='auth-title'>Create New Password</h1>
                </div>

                <AntForm form={form} layout='vertical'>
                    <AntForm.Item label={<span className=''>New Password</span>}>
                        <Input.Password
                            placeholder='New Password'
                            className='form-input'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        >
                        </Input.Password>
                    </AntForm.Item>

                    <AntForm.Item label={<span className=''>Confirm Password</span>}>
                        <Input.Password
                            placeholder='Confirm Password'
                            className='form-input'
                        >
                        </Input.Password>
                    </AntForm.Item>

                    <div className='form-footer'>
                        <Button
                            onClick={() => {
                                handleChange()
                            }}
                            className='submit-btn'
                        >
                            Update Password
                        </Button>
                    </div>
                </AntForm>
            </div>
        </div>
    )
}

export default ChangePassword