import React, { Suspense } from 'react'
import { Routes, Route } from "react-router-dom"
import Login from "../pages/auth/login/Login"
import Loader from "../components/loader/Loader"
import { Dashboard, UserManagement } from "../pages"
import Roles from '../pages/roles/Roles'
import Chats from '../pages/chats/Chats'

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />}>
                    <Route path='user-management' element={<UserManagement />} />
                    <Route path='roles' element={<Roles />}></Route>
                    <Route path='chats' element={<Chats/>}></Route>
                </Route>
            </Routes>
        </Suspense>
    )
}

export default AppRoutes