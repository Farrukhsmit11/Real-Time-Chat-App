import React, { useState } from 'react'
import "./SideBar.css"
import { HomeOutlined } from "@ant-design/icons"
import { LuUsers } from "react-icons/lu";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoIosSettings } from "react-icons/io";
import { routes } from '../../routes/ProtectedRoutes';
import { NavLink, useNavigate } from 'react-router-dom';
import { TbLogout2 } from 'react-icons/tb';

const SideBar = () => {

    const navigate = useNavigate()

    return (
        <div className='nav-items-main'>
            {routes.map((route, index) => {
                return (
                    <NavLink
                        className={({ isActive }) => `nav-icon-main  ${isActive ? "active" : ""}`}
                        to={route.path}
                        key={route.key}
                    >
                        <div className='nav-items-content'>
                            <span className='nav-icon'> {route.icon}
                            </span>
                            <span className='route-label'>{route.key}</span>
                        </div>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default SideBar