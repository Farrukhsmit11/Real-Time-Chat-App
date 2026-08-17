import React, { Suspense } from 'react'
import { AddFriend } from '../pages'
import { Navigate, Route, Routes } from 'react-router-dom'
import Loader from '../components/loader/Loader'
import { HomeOutlined, PlusCircleOutlined, SettingFilled, UserAddOutlined } from '@ant-design/icons'
import { LuMessageCircleMore, LuUsers } from 'react-icons/lu'
import Settings from '../pages/settings/Settings'
import { IoSettingsOutline } from "react-icons/io5";
import { PiChatsDuotone } from "react-icons/pi";
import { PiChatsTeardropBold } from "react-icons/pi";
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
    {
        path: "/settings",
        key: "Settings",
        element: <Settings />,
        icon: <IoSettingsOutline />
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