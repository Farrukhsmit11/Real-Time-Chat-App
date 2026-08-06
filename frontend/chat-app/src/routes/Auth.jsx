import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login, SignUp } from '../pages/auth'

const Auth = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/signUp' element={<SignUp />}></Route>
            <Route path='*' element={<Login />}></Route>
        </Routes>
    )
}

export default Auth