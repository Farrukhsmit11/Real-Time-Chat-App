import React from 'react'
import AuthNav from '../../../components/authNav/AuthNav'
import { Formik } from "formik"
import { Button, Checkbox, Form, Input } from "antd"
import "./Login.css"

const Login = () => {

  const initialValues = {
    email: "",
    password: ""
  }

  const [form] = Form.useForm()

  return (
    <>
      <AuthNav />
      <div className='auth-container'>
        <div className="auth-card">
          <div className="auth-header">
            <h1 className='auth-title'>Welcome Back 👋</h1>
            <span className='auth-description'>Sign in to continue your conversations.</span>
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
                  <Input className='form-input' placeholder='Email Address'></Input>
                </Form.Item>

                <Form.Item label="Password">
                  <Input.Password className='form-input' placeholder='Password'></Input.Password>
                </Form.Item>

                <div className='footer'>
                  <Checkbox>Remember me</Checkbox>
                  <a href='#'>Forgot Password</a>
                </div>

                <div className="auth-login-footer">
                  <Button className='submit-btn'>Log in</Button>
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