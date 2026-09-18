import React, { useState } from 'react'
import { Form as AntForm, Button, Input, message } from 'antd'
import "./OtpVerification.css"
import { handleResendOtp, handleVerifyOtp } from "../../../store/features/auth/authThunk"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from 'react-router-dom'
import { Formik } from "formik"
import { otpVerificationSchema } from './Validations'

const OtpVerification = () => {

    const [form] = AntForm.useForm()
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const resetEmail = location.state?.email

    const initialValues = {
        otp: ""
    }

    const data = useSelector(({ auth }) => ({
        loading: auth?.verifyOtpLoading,
        authLoading: auth?.resendOtpLoading
    }))

    const { loading, authLoading } = data

    const handleVerify = async () => {
        try {
            await dispatch(handleVerifyOtp({
                email: resetEmail,
                otp
            })).unwrap()
            message.success("OTP Verified")
            navigate("/changePassword", { state: { email: resetEmail } })
        } catch (error) {
            console.error("error verifying otp", error)
        }
    }

    const handleResend = async () => {
        try {
            await dispatch(handleResendOtp({
                email: resetEmail,
                otp
            })).unwrap()
            message.success(`New Otp Has been sent to ${resetEmail} `)
        } catch (error) {
            console.error("error resending otp", error)
        }
    }

    const otpSubmit = async (values, { resetForm }) => {
        resetForm();
    }

    return (
        <div className='auth-container'>
            <div className="auth-card">
                <div className="auth-header">
                    <h1 className='auth-otp-title'>Enter 6 Digit OTP</h1>
                </div>

                <Formik
                    initialValues={initialValues}
                    validationSchema={otpVerificationSchema}
                    onSubmit={otpSubmit}
                >
                    {({
                        handleSubmit,
                        errors,
                        touched,
                        setFieldTouched,
                        values
                    }) => (
                        <AntForm form={form} layout='vertical'
                            onFinish={handleSubmit}
                        >
                            <AntForm.Item
                                validateStatus={errors.otp && touched.otp ? "error" : ""}
                                help={
                                    errors.otp && touched.otp ? (
                                        <span className='form-error'>{errors.otp}</span>
                                    ) : ""
                                }
                            >
                                <Input.OTP
                                    separator="-"
                                    onBlur={() => {
                                        setFieldTouched("otp", true)
                                    }}
                                    value={values.otp}
                                    size='medium'
                                    length={6}
                                >
                                </Input.OTP>

                            </AntForm.Item>

                            <div className='resend-otp-main'>
                                <span className='resend-otp-title'>
                                    Didn't receive this code?
                                </span>
                            </div>

                            <div className="form-footer">
                                <Button
                                    className='submit-btn-black'
                                    onClick={() => handleResend()}
                                    loading={authLoading}
                                    htmlType='submit'
                                >Resend OTP
                                </Button>

                                <Button
                                    loading={loading}
                                    onClick={() => handleVerify()}
                                    className='submit-btn'
                                    htmlType='submit'
                                >
                                    Verify OTP
                                </Button>
                            </div>
                        </AntForm>
                    )
                    }
                </Formik>
            </div>
        </div>
    )
}

export default OtpVerification