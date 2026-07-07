import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "../pages/auth/login/Login"

const Auth = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />}></Route>
        </Routes>
    )
}

export default Auth