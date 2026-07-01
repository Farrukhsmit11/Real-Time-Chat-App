import React from 'react'
import { Routes, Route } from "react-router-dom"
import UserManagement from "../pages/userManagement/UserManagement"
import Roles from "../pages/roles/Roles"
import Chats from "../pages/chats/Chats"
import Login from "../pages/auth/login/Login"
import Dashboard from "../pages/dashboard/Dashboard"
import Home from "../pages/home/Home"


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />}></Route>

            <Route path='/dashboard' element={<Dashboard />}>
                <Route index element={<Home />}></Route>
                <Route path='user-management' element={<UserManagement />}></Route>
                <Route path='roles' element={<Roles />}></Route>
                <Route path='chats' element={<Chats />}></Route>
            </Route>

        </Routes>
    )
}

export default AppRoutes