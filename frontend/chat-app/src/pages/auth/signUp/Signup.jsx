import React from 'react'
import "./Signup.css"

const Signup = () => {

    const [form] = Form.useForm()

    return (
        <>
            <div className='auth-container'>
                <div className="auth-card">
                    <h1>Sign Up</h1>
                </div>
            </div>
        </>
    )
}

export default Signup