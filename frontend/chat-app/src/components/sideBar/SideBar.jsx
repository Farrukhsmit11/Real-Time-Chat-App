import React, { useState } from 'react'
import "./SideBar.css"
import { LuUsers } from "react-icons/lu";
import UserProfileCard from '../userProfileCard/UserProfileCard';
import { sidebarLinks } from './helper';
import { IoLogOutOutline } from "react-icons/io5";
import { Button } from 'antd';
import { LuLogOut } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom"
import { LuChevronRight } from "react-icons/lu";

const SideBar = () => {

    const navigate = useNavigate()

    const [isActive, setIsActive] = useState(true)

    const sideBarContent = (
        <>
            <div className='sidebar-main'>
                <div className='sidebar-header'>
                    <LuUsers className='users-icon' />
                    <div className='sidebar-header-right'>
                        <p className='sidebar-title'>Multi user Ms</p>
                        <p className='sidebar-description'>Management System</p>
                    </div>
                </div>
            </div>

            <div className="user-profile">
                <UserProfileCard />
            </div>

            <div className='sidebar-body'>
                <div className="section-label">
                    <p className='sidebar-label'>Navigation </p>
                </div>

                <div className='sidebar-content'>
                    {sidebarLinks.map((item) => {
                        return (
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? "sidebar-links active" : "sidebar-link"
                                }
                                key={item.id}

                            >

                                <div className='link-left'>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </div>
                                <LuChevronRight />
                            </NavLink>
                        )
                    })}
                </div>
            </div>

            <div className="logout-section">
                <LuLogOut />
                <a href='#' onClick={() => navigate("/")} className='dashboard-link'>
                    <h1 className='logout-title'>Log out</h1>
                </a>
            </div>

        </>
    )

    return (
        <aside className='sidebar'>{sideBarContent}</aside>
    )
}

export default SideBar