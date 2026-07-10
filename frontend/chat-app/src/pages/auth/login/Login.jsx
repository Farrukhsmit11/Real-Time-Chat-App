import React, { useState } from 'react'
import { Formik } from "formik"
import { Button, Checkbox, Form, Input, message } from "antd"
import "./Login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const initialValues = {
    email: "",
    password: ""
  }

  const [form] = Form.useForm()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  const BASE_URL = "http://localhost:5000"

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const data = await axios.post(`${BASE_URL}/login`, {
        email,
        password
      },
        { withCredentials: true }
      )
      const res = data.data?.res
      message.success("Login sucessfully")
      navigate("/chatApp")
      setLoading(false)
    } catch (error) {
      if (error.response) {
        message.error(error.response.data.message)
      }
      console.error("error login failed", error)
    }
  }

  return (
    <>
      <div className='auth-container'>
        <div className="auth-card">
          <div className="auth-header">
            <h1 className='auth-title'>Sign In 👋</h1>
            <span className='auth-description'>Join to start Conversations</span>
          </div>

          <Formik
            initialValues={initialValues}
          >
            {({
              handleBlur,
              handleSubmit,
              handleChange
            }) => (
              <Form form={form} layout='vertical'>
                <Form.Item label="Email">
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    className='form-input'
                    placeholder='Email Address'></Input>
                </Form.Item>

                <Form.Item label="Password">
                  <Input.Password
                    onChange={(e) => setPassword(e.target.value)}
                    className='form-input'
                    placeholder='Password'
                  ></Input.Password>
                </Form.Item>

                <div className='footer'>
                  <Checkbox className='checkbox-label'>Remember me</Checkbox>
                </div>

                <div className="auth-login-footer">
                  <Button
                    loading={loading}
                    onClick={() => handleLogin()}
                    className='submit-btn'
                  >Log in</Button>
                </div>

                <div className='signup-footer'>
                  <span >Don,t have an account
                    <a href='#' onClick={() => navigate("/")}>Sign Up</a>
                  </span>
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

export default Login