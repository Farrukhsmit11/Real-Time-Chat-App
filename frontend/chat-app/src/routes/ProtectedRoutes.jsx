import React, { Suspense } from 'react'
import { AddFriend, Chats } from '../pages'
import { Route, Routes } from 'react-router-dom'
import Loader from '../components/loader/Loader'
import { HomeOutlined, PlusCircleOutlined, SettingFilled, UserAddOutlined } from '@ant-design/icons'
import { LuMessageCircleMore, LuUsers } from 'react-icons/lu'
import Settings from '../pages/settings/Settings'
import { IoSettingsOutline } from "react-icons/io5";
import { PiChatsDuotone } from "react-icons/pi";
import { PiChatsTeardropBold } from "react-icons/pi";
import UserProfile from '../pages/userProfile/UserProfile'


export const routes = [
    {
        path: "/",
        key: "Dashboard",
        element: <Chats />,
        icon: <HomeOutlined />,
    },

    {
        path: "/addFreind",
        key: "AddFriend",
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

                <Route
                    path="/userProfile"
                    element={<UserProfile />}
                />
            </Routes>
        </Suspense>

    )
}

export default ProtectedRoutes