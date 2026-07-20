import React from 'react'
import "./SignUp.css"
import { Formik } from 'formik'
import { Form as AntForm, Button, Input, message } from "antd"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { useState } from 'react'
import "./SignUp.css"
import { useDispatch } from 'react-redux'
import { handleSignup } from '../../../store/features/auth/authThunk'

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(false)

    const initialValues = {
        name: "",
        email: "",
        password: ""
    }

    const [form] = AntForm.useForm()

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        dispatch(handleSignup({
            name,
            email,
            password
        }))
    }

    return (
        <div className='signup-container'>
            <div className="auth-card">
                <div className="auth-header">
                    <h1 className='auth-title'>Sign Up</h1>
                </div>

                <Formik
                    initialValues={initialValues}
                >
                    {({
                        handleBlur,
                        handleChange,
                        handleReset,
                        errors,
                        values,
                        touched
                    }) => (
                        <AntForm
                            form={form}
                            layout='vertical'
                        >
                            <AntForm.Item label="Name">
                                <Input className='form-input' placeholder='Enter Name' onChange={(e) => setName(e.target.value)}  ></Input>
                            </AntForm.Item>

                            <AntForm.Item label="Email">
                                <Input
                                    className='form-input'
                                    placeholder='Enter Email'
                                    name='email'
                                    onChange={(e) => setEmail(e.target.value)}
                                ></Input>
                            </AntForm.Item>

                            <AntForm.Item label="Password">
                                <Input.Password
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='form-input'
                                    placeholder='Enter Password'
                                ></Input.Password>

                            </AntForm.Item>

                            <div className="auth-footer">
                                <Button
                                    className='submit-btn'
                                    loading={loading}
                                    onClick={() => handleSubmit()}
                                >Sign Up</Button>
                                <Button className='submit-btn-black' onClick={() => navigate("/login")}>Login</Button>
                            </div>
                        </AntForm>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default SignUp