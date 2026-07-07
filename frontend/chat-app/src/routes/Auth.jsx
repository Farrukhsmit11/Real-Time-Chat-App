import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "../pages/auth/login/Login"
import SignUp from '../pages/auth/signUp/SignUp'

const Auth = () => {
    return (
        <Routes>
            <Route path='/' element={<SignUp />}></Route>
            <Route path='/login' element={<Login />}></Route>
        </Routes>
    )
}

export default Auth