import React, { useState } from 'react'
import "../Auth.css"
import { Button, Form, Input, message } from "antd"
import { Formik } from "formik"
import AuthNav from '../../../components/authNav/AuthNav'
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Signup = () => {

    const [form] = Form.useForm()

    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")

    const initialvalues = {
        name: "",
        email: "",
        password: ""
    }

    const onSubmit = (values) => {
        console.log(values)
        setLoading(true)
    }


    const BASE_URL = "http://localhost:5000"

    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const res = await axios.post(`${BASE_URL}/signup`, {
                name,
                email,
                password
            })
            const data = res?.data?.user
            message.success("Signup Sucessfull")
            navigate("/login")
        } catch (error) {
            if (error.response) {
                message.error(error.response.data.message)
            }
            console.error("Signup failed", error)
        }
    }

    return (
        <>
            <AuthNav />
            <div className='auth-container'>
                <div className="auth-card">

                    <div className="auth-header">
                        <h1 className='auth-title'>Create Account</h1>
                    </div>


                    <Form form={form} layout='vertical'>
                        <Form.Item label="Full Name">
                            <Input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                className='form-input'
                                placeholder='Full name'
                            >
                            </Input>
                        </Form.Item>

                        <Form.Item label="Email">
                            <Input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className='form-input'
                                placeholder='Email Address'
                            >
                            </Input>
                        </Form.Item>

                        <Form.Item label="Password">
                            <Input.Password
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                className='form-input'
                                placeholder='Password'
                            >
                            </Input.Password>
                        </Form.Item>

                        <div className='auth-footer'>
                            <Button
                                onClick={() => handleSignup()}
                                className='submit-btn'
                                loading={loading}
                                htmlType='submit'>Sign Up</Button>
                            <Button
                                onClick={() => navigate("/login")}
                                className='submit-btn-black'
                            >Log in</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Signup