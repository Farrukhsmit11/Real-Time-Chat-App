import React, { useState } from 'react'
import "./ChangePassword.css"
import { Form as AntForm, Button, Input, message } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { handleChangePassword } from '../../../store/features/auth/authThunk'
import { useLocation, useNavigate } from 'react-router-dom'

const ChangePassword = () => {

    const [form] = AntForm.useForm()

    const navigate = useNavigate()

    const [newPassword, setNewPassword] = useState("");

    const dispatch = useDispatch()
    const location = useLocation()

    const changedEmail = location.state?.email

    const reducers = useSelector(({ auth }) => ({
        loading: auth?.changePasswordLoading,
        error: auth?.error
    }))

    const { loading, error } = reducers

    const handleChange = async () => {
        try {
            await dispatch(handleChangePassword({ email: changedEmail, newPassword })
            ).unwrap()
            navigate("/login")
        } catch (error) {
            message.error(error)
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
                    <AntForm.Item label={<span>New Password</span>}>
                        <Input.Password
                            placeholder='New Password'
                            className='form-input'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        >
                        </Input.Password>
                    </AntForm.Item>

                    <AntForm.Item label={<span>Confirm Password</span>}>
                        <Input.Password
                            placeholder='Confirm Password'
                            className='form-input'
                        >
                        </Input.Password>
                    </AntForm.Item>

                    <div className='form-footer'>
                        <Button
                            loading={loading}
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