import React from 'react'
import { Dashboard, Chats } from '../pages'
import { Route, Routes } from 'react-router-dom'
import Loader from '../components/loader/Loader'
import { HomeOutlined, PlusCircleOutlined, SettingFilled, UserAddOutlined } from '@ant-design/icons'
import { LuMessageCircleMore, LuUsers } from 'react-icons/lu'
import Settings from '../pages/settings/Settings'
import { IoSettingsOutline } from "react-icons/io5";
import { PiChatsDuotone } from "react-icons/pi";
import { PiChatsTeardropBold } from "react-icons/pi";


export const routes = [
    {
        path: "/",
        key: "dashboard",
        element: <Dashboard />,
        icon: <HomeOutlined />,
    },

    {
        path: "/chats",
        key: "chats",
        element: <Chats />,
        icon: <PiChatsTeardropBold />,
    },

    {
        path: "/addFreind",
        key: "addFriend",
        icon: <UserAddOutlined />
    },

    {
        path: "/settings",
        key: "settings",
        element: <Settings />,
        icon: <IoSettingsOutline />
    }
]

const ProtectedRoutes = () => {
    return (
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
        </Routes>
    )
}

export default ProtectedRoutes