import React, { useState } from 'react'
import "../Auth.css"
import { Button, Form, Input } from "antd"
import { Formik } from "formik"
import AuthNav from '../../../components/authNav/AuthNav'
import { useNavigate } from "react-router-dom"

const Signup = () => {

    const [form] = Form.useForm()

    const [loading, setLoading] = useState(false)

    const initialvalues = {
        name: "",
        email: "",
        password: ""
    }

    const onSubmit = (values) => {
        console.log(values)
        setLoading(true)
    }

    const navigate = useNavigate();

    return (
        <>
            <AuthNav />
            <div className='auth-container'>
                <div className="auth-card">

                    <div className="auth-header">
                        <h1 className='auth-title'>Create Account</h1>
                    </div>

                    <Formik
                        initialvalues={initialvalues}
                        onSubmit={onSubmit}
                    >
                        {({
                            handleSubmit,
                            handleReset,
                            handleChange,
                            values,
                            errors,
                            touched

                        }) => (
                            <Form form={form} layout='vertical' onFinish={handleSubmit}>
                                <Form.Item label="Full Name">
                                    <Input
                                        className='form-input'
                                        placeholder='Full name'
                                    >
                                    </Input>
                                </Form.Item>

                                <Form.Item label="Email">
                                    <Input
                                        className='form-input'
                                        placeholder='Email Address'
                                    >
                                    </Input>
                                </Form.Item>

                                <Form.Item label="Password">
                                    <Input.Password
                                        className='form-input'
                                        placeholder='Password'
                                    >
                                    </Input.Password>
                                </Form.Item>

                                <div className='auth-footer'>
                                    <Button className='submit-btn' loading={loading} htmlType='submit'>Sign Up</Button>
                                    <Button
                                        onClick={() => navigate("/login")}
                                        className='submit-btn-black'
                                    >Log in</Button>
                                </div>
                            </Form>
                        )
                        }
                    </Formik>

                </div>
            </div>
        </>
    )
}

export default Signup