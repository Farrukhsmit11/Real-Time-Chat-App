import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ForgotPassword, Login, OtpVerification, SignUp, ChangePassword } from '../pages/auth'

const Auth = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signUp' element={<SignUp />}></Route>
            <Route path='*' element={<Login />}></Route>
            <Route path='/otpVerification' element={<OtpVerification />}></Route>
            <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
            <Route path='/changePassword' element={<ChangePassword />}></Route>
        </Routes>
    )
}

export default Auth