import React from 'react'
import authLogo from "../../assets/chatapp-logo.png"
import "./AuthNav.css"

const AuthNav = () => {
    return (
        <div className='auth-nav-container'>
            <div className="auth-nav-logo">
                <img src={authLogo} />
            </div>
        </div>
    )
}

export default AuthNav