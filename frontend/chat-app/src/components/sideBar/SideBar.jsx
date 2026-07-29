import React from 'react'
import "./SideBar.css"
import { HomeOutlined } from "@ant-design/icons"
import { LuUsers } from "react-icons/lu";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoIosSettings } from "react-icons/io";
import { routes } from '../../routes/ProtectedRoutes';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {

    const navigate = useNavigate()

    return (
        <div className='nav-items-main'>
            {routes.map((route, index) => {
                return (
                    <div className='nav-icon-main' key={index}>
                        <span className='nav-icon'> {route.icon}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default SideBar