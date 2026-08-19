import React from 'react'
import { Form as AntForm, Button, Input, message } from "antd"
import { Formik } from 'formik'
import { post } from '../../../utils/apiMethod'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { handleForgotPassword } from '../../../store/features/auth/authThunk'
import { FaArrowLeftLong } from "react-icons/fa6";

const ForgotPassword = () => {

    const [form] = AntForm.useForm()
    const [email, setEmail] = useState([])

    const dispatch = useDispatch()

    const res = useSelector(({ auth }) => ({
        loading: auth?.forgotPasswordLoading
    }))

    const { loading } = res

    const navigate = useNavigate();

    const onSubmit = async () => {
        try {
            await dispatch(handleForgotPassword({
                email
            })).unwrap()
            message.success(`We have sent an Otp to ${email}`)
            navigate("/otpVerification")
        } catch (error) {
            if (error.response) {
                message.error(error.response.data.message)
            }
            console.error("error sending email")
        }
    }

    return (
        <div className='auth-container'>
            <div className="auth-card">
                <div className="auth-header">
                    <h1 className='auth-title'>Forgot Password?</h1>
                </div>

                <Formik
                >
                    {({
                    }) => (
                        <AntForm form={form} layout='vertical'>
                            <AntForm.Item label="Email">
                                <Input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    value={email}
                                    placeholder='Enter Email'
                                    name='email'
                                    className='form-input'
                                ></Input>
                            </AntForm.Item>

                            <div className="form-footer">
                                <Button
                                    onClick={() => onSubmit()}
                                    className='submit-btn'
                                    loading={loading}
                                >Send Verification Code</Button>
                                <Button
                                    icon={<FaArrowLeftLong />}
                                    onClick={() => navigate("/login")}
                                    className='submit-btn-white'
                                >
                                    Back to Login</Button>
                            </div>
                        </AntForm>
                    )
                    }
                </Formik>
            </div>
        </div>
    )
}

export default ForgotPassword