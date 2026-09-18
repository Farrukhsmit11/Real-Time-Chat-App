import "./SignUp.css"
import { Formik } from 'formik'
import { Form as AntForm, Button, Input, message } from "antd"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import "./SignUp.css"
import { useDispatch, useSelector } from 'react-redux'
import { handleSignup } from '../../../store/features/auth/authThunk'
import { signUpSchema } from './Validations'

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const reducer = useSelector(({ auth }) => ({
        loading: auth?.signUpLoading,
        error: auth?.error
    }))

    const { loading, error } = reducer

    const initialValues = {
        name: "",
        email: "",
        password: ""
    }

    const [form] = AntForm.useForm()

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const onSignup = async (values, { resetForm }) => {
        resetForm()
    }

    const registerUser = async () => {
        try {
            await dispatch(handleSignup({
                name,
                email,
                password
            })
            ).unwrap()
            navigate("/")
        } catch (error) {
            message.error(error)
        }
    }

    return (
        <div className='auth-container'>
            <div className="auth-card">
                <div className="auth-header">
                    <h1 className='auth-title'>Sign Up</h1>
                </div>

                <Formik
                    initialValues={initialValues}
                    validationSchema={signUpSchema}
                    onSubmit={onSignup}
                >
                    {({
                        handleSubmit,
                        handleBlur,
                        handleChange,
                        errors,
                        values,
                        touched
                    }) => (
                        <AntForm
                            form={form}
                            layout='vertical'
                            onFinish={handleSubmit}
                        >
                            <AntForm.Item
                                validateStatus={errors.name && touched.name ? "error" : ""}
                                help={
                                    errors.name && touched.name ? (
                                        <span className='form-error'>{errors.name}</span>
                                    ) : ""
                                }
                                label="Name"
                            >
                                <Input
                                    className='form-input'
                                    placeholder='Enter Name'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name='name'
                                    value={values.name}
                                >
                                </Input>
                            </AntForm.Item>

                            <AntForm.Item

                                validateStatus={errors.email && touched.email ? "error" : ""}
                                help={
                                    errors.name && touched.email ? (
                                        <span className='form-error'>{errors.email}</span>
                                    ) : ""
                                }
                                label="Email"
                            >
                                <Input
                                    onChange={handleChange}
                                    value={values.email}
                                    onBlur={handleBlur}
                                    className='form-input'
                                    placeholder='Enter Email'
                                    name='email'

                                ></Input>
                            </AntForm.Item>

                            <AntForm.Item
                                validateStatus={errors.password && touched.password ? "error" : ""}
                                help={
                                    errors.password && touched.password ? (
                                        <span className='form-error'>{errors.password}</span>
                                    ) : ""
                                }
                                label="Password"
                            >
                                <Input.Password
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    name='password'
                                    className='form-input'
                                    placeholder='Enter Password'
                                ></Input.Password>

                            </AntForm.Item>

                            <div className="auth-footer">
                                <Button
                                    htmlType='submit'
                                    className='submit-btn'
                                    onClick={() => registerUser()}
                                    loading={loading}
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