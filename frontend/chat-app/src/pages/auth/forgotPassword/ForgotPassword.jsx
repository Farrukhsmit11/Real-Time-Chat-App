import { Form as AntForm, Button, Input, message } from "antd"
import { Formik } from 'formik'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { handleForgotPassword } from '../../../store/features/auth/authThunk'
import { FaArrowLeftLong } from "react-icons/fa6";
import { forgotPasswordSchema } from "./forgotPasswordSchema"

const ForgotPassword = () => {

    const [form] = AntForm.useForm()
    const [email, setEmail] = useState([])

    const initialValues = {
        email: ""
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const res = useSelector(({ auth }) => ({
        loading: auth?.forgotPasswordLoading,
        error: auth?.error
    }))

    const { loading } = res

    const onSubmit = async () => {
        try {
            await dispatch(handleForgotPassword({
                email
            })).unwrap()
            message.success(`We have sent 6 Digit Otp to ${email}`)
            navigate("/otpVerification", { state: { email } })
        } catch (error) {
            message.error(error)
        }
    }

    return (
        <div className='auth-container'>
            <div className="auth-card">
                <div className="auth-header">
                    <h1 className='auth-title'>Forgot Password?</h1>
                </div>

                <Formik
                    validationSchema={forgotPasswordSchema}
                    initialValues={initialValues}
                    onSubmit={(values, action) => {
                        onSubmit(values)
                    }}
                >
                    {({
                        handleSubmit,
                        handleBlur,
                        handleChange,
                        values,
                        errors,
                        touched
                    }) => (
                        <AntForm
                            onFinish={handleSubmit}
                            form={form}
                            layout='vertical'
                        >
                            <AntForm.Item
                                validateStatus={errors.email && touched.email ? "error" : ""}
                                help={
                                    errors.email && touched.email ? (
                                        <span className="form-error">{errors.email}</span>
                                    ) : ""
                                }
                                label="Email"
                            >
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="email"
                                    value={values.email}
                                    name='email'
                                    placeholder='Enter Email'
                                    className='form-input'
                                ></Input>
                            </AntForm.Item>

                            <div className="form-footer">
                                <Button
                                    onClick={() => onSubmit()}
                                    htmlType="submit"
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