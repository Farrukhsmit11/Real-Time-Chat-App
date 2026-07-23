import React, { useState } from 'react'
import { Formik } from "formik"
import { Button, Checkbox, Form, Input, message } from "antd"
import "./Login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { handleLogin } from '../../../store/features/auth/authThunk'
import { useDispatch, useSelector } from "react-redux"

const Login = () => {

  const initialValues = {
    email: "",
    password: ""
  }

  const [form] = Form.useForm()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const reducer = useSelector(({ auth }) => ({
    user: auth?.user,
    loading: auth?.loading,
  }))

  const { user, loading } = reducer

  const formSubmit = (values, { resetForm }) => {
    resetForm()
  }

  const onSubmit = async () => {
    dispatch(handleLogin({
      email,
      password
    }))
    navigate()
  }

  const navigate = useNavigate()

  return (
    <>
      <div className='login-container'>
        <div className="auth-card">
          <div className="auth-header">
            <h1 className='auth-title'>Sign In 👋</h1>
            <span className='auth-description'>Join to start Conversations</span>
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={formSubmit}
          >
            {({
              handleBlur,
              handleSubmit,
              handleChange
            }) => (
              <Form form={form} layout='vertical' onFinish={handleSubmit}>
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
                    onClick={() => onSubmit()}
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