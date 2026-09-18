import React, { useState } from 'react'
import "./ChangePassword.css"
import { Form as AntForm, Button, Input, message } from "antd"
import { Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { handleChangePassword } from '../../../store/features/auth/authThunk'
import { useLocation, useNavigate } from 'react-router-dom'
import { changePasswordSchema } from './ChangePasswordSchema'

const ChangePassword = () => {

    const [form] = AntForm.useForm()
    const [newPassword, setNewPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation()

    const initialValues = {
        newPassword: "",
        confirmPassword: ""
    }

    const changedEmail = location.state?.email

    const reducers = useSelector(({ auth }) => ({
        loading: auth?.changePasswordLoading,
        error: auth?.error
    }))

    const { loading, error } = reducers

    const createNewPassword = async () => {
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

                <Formik
                    initialValues={initialValues}
                    validationSchema={changePasswordSchema}
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
                            form={form}
                            layout='vertical'
                            onFinish={handleSubmit}
                        >
                            <AntForm.Item
                                label={<span>New Password</span>}
                                validateStatus={errors.newPassword && touched.newPassword ? "error" : ""}
                                help={
                                    errors.newPassword && touched.newPassword ? (
                                        <span className='form-error'>{errors.newPassword}</span>
                                    ) : ""
                                }
                            >
                                <Input.Password
                                    placeholder='New Password'
                                    className='form-input'
                                    value={values.newPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name='newPassword'
                                >
                                </Input.Password>
                            </AntForm.Item>

                            <AntForm.Item
                                label={<span>Confirm Password</span>}
                                validateStatus={errors.confirmPassword && touched.confirmPassword ? "error" : ""}
                                help={
                                    errors.confirmPassword && touched.confirmPassword ? (
                                        <span className='form-error'>{errors.confirmPassword}</span>
                                    ) : ""
                                }
                            >
                                <Input.Password
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                    name='confirmPassword'
                                    placeholder='Confirm Password'
                                    className='form-input'
                                >
                                </Input.Password>
                            </AntForm.Item>

                            <div className='form-footer'>
                                <Button
                                    loading={loading}
                                    htmlType='submit'
                                    onClick={() => {
                                        createNewPassword()
                                    }}
                                    className='submit-btn'
                                >
                                    Update Password
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

export default ChangePassword