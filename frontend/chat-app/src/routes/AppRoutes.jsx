import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from "../pages/auth/login/Login"
import Loader from "../components/loader/Loader"
import { Dashboard } from "../pages"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />}>
            </Route>
        </Routes>
    )
}

export default AppRoutes