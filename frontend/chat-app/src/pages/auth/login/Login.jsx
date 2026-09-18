import React, { useState } from 'react'
import { Formik } from "formik"
import { Button, Checkbox, Form, Input, message } from "antd"
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import { handleLogin } from '../../../store/features/auth/authThunk'
import { useDispatch, useSelector } from "react-redux"

const Login = () => {

  const [form] = Form.useForm()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const reducer = useSelector(({ auth }) => ({
    user: auth?.user,
    loading: auth?.loginLoading,
    error: auth?.error
  }))

  const { user, loading, error } = reducer


  const onSubmit = async () => {
    try {
      await dispatch(handleLogin({
        email,
        password
      })
      ).unwrap()
      navigate("/dashboard")
    } catch (error) {
      if (error.response) {
        message.error(error.response.data.message)
      }
      console.error(error)
    }
  }

  return (
    <>
      <div className='auth-container'>
        <div className="auth-card">
          <div className="auth-header">
            <h1 className='auth-title'>Sign In</h1>
          </div>

          <Formik
          >
            {({
              handleBlur,
              handleSubmit,
              handleChange,
              errors,
              touched,
              values
            }) => (
              <Form form={form} layout='vertical' onFinish={handleSubmit}>

                <Form.Item
                
                  label="Email"
                >
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleBlur}
                    name='email'
                    className='form-input'
                    placeholder='Email Address'
                  >
                  </Input>
                </Form.Item>

                <Form.Item label="Password"
                 
                >
                  <Input.Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name='password'
                    className='form-input'
                    placeholder='Password'
                  ></Input.Password>
                </Form.Item>

                <div className='footer'>
                  <Checkbox className='checkbox-label'>Remember me</Checkbox>
                  <a href='#' onClick={() => navigate("/forgotPassword")}>Forgot Password?</a>
                </div>

                <div className="auth-login-footer">
                  <Button
                    loading={loading}
                    onClick={() => onSubmit()}
                    className='submit-btn'
                  >Log in</Button>
                </div>

                <div className='signup-footer'>
                  <span >Don,t have an account
                    <a href='#' onClick={() => navigate("/signUp")}>Sign Up</a>
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