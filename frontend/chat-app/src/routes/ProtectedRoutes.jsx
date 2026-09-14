import React, { Suspense } from 'react'
import { AddFriend } from '../pages'
import { Navigate, Route, Routes } from 'react-router-dom'
import Loader from '../components/loader/Loader'
import { HomeOutlined, UserAddOutlined } from '@ant-design/icons'
import Dashboard from '../pages/dashboard/Dashboard'
import UserProfile from "../pages/userProfile/UserProfile"


export const routes = [
    {
        path: "/dashboard",
        key: "Dashboard",
        element: <Dashboard />,
        icon: <HomeOutlined />,
    },

    {
        path: "/addFriend",
        key: "Add Friend",
        element: <AddFriend />,
        icon: <UserAddOutlined />
    },



]

const ProtectedRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {routes.map((route) => {
                    return (
                        <Route
                            path={route.path}
                            key={route.key}
                            element={route.element}
                        >
                        </Route>
                    )
                })}

                <Route path='/userProfile' element={<UserProfile />}></Route>
                <Route path='*' element={<Navigate to="/dashboard" replace />}></Route>
            </Routes>
        </Suspense>

    )
}

export default ProtectedRoutes