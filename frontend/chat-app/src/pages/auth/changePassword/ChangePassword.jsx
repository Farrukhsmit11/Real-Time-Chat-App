import React from 'react'
import "./ChangePassword.css"
import { Form as AntForm, Button, Input } from "antd"

const ChangePassword = () => {

    const [form] = AntForm.useForm()

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
                        <Button className='submit-btn'>Update Password</Button>
                    </div>
                </AntForm>
            </div>
        </div>
    )
}

export default ChangePassword