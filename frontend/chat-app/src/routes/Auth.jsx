import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login, SignUp } from '../pages/auth'

const Auth = () => {
    return (
        <Routes>
            <Route path='/' element={<SignUp />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='*' element={<Login />}></Route>
        </Routes>
    )
}

export default Auth