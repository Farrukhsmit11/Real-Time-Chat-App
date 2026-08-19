import React, { useState } from 'react'
import { Form as AntForm, Button, Input } from 'antd'
import "./OtpVerification.css"
import { handleVerifyOtp } from "../../../store/features/auth/authThunk"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'

const OtpVerification = () => {

    const [form] = AntForm.useForm()
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            dispatch(handleVerifyOtp({
                email,
                otp
            })).unwrap()

            navigate("/changePassword")

        } catch (error) {
            console.error("error verifying otp", error)
        }
    }

    return (
        <div className='auth-container'>
            <div className="auth-card">
                <div className="auth-header">
                    <h1 className='auth-otp-title'>Enter 6 Digit OTP</h1>
                </div>

                <AntForm form={form} layout='vertical'>
                    <AntForm.Item>
                        <Input.OTP
                            separator="-"
                            value={otp}
                            onChange={(value) => setOtp(value)}
                            size='medium'
                            length="6"
                        >
                        </Input.OTP>
                    </AntForm.Item>

                    <span className='resend-otp-title'>
                        Didn't receive this code?
                    </span>

                    <div className="form-footer">
                        <Button className='submit-btn-black'>Resend OTP</Button>
                        <Button
                            onClick={() => handleSubmit()}
                            className='submit-btn'
                        >
                            Verify OTP
                        </Button>
                    </div>
                </AntForm>
            </div>
        </div>
    )
}

export default OtpVerification