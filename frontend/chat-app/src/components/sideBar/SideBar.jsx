import React from 'react'
import "./SideBar.css"
import sidebarLogo from "../../assets/right-sidebar-logo.png"
import { SlOptionsVertical } from "react-icons/sl";
import { Input } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"
import avatarImg from "../../assets/avatar-img.jfif"

const SideBar = () => {

    const [users, setUsers] = useState([])

    const BASE_URL = "http://localhost:5000"

    useEffect(() => {
        const response = axios.get(`${BASE_URL}/getUsers`)
            .then(response => {
                setUsers(response.data.res)
            })
            .catch(error => {
                console.error("error fetching users", error)
            })
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar-header">

                <div className="sidebar-logo-section">
                    <img src={sidebarLogo} className='sidebar-logo' />
                    <div className="icon-right">
                        <SlOptionsVertical className='options-icon' />
                    </div>
                </div>

                <div className="menu-wrapper">
                    <div className="menu-dropdown">
                        <p>Edit Profile</p>
                        <hr />
                        <p>Logout</p>
                    </div>
                </div>
            </div>


            <div className="input-section">
                <Input className='search-users-input' placeholder='Search Users' suffix={<SearchOutlined />}></Input>

                <ul className='users-list'>
                    {users.map((item) => {
                        return (
                            <li key={item.id} className='user-item'>
                                <div className='image-main'>
                                    <img className='avatar-img' src={avatarImg} />
                                </div>
                                <h2 className='users-name'>{item.name}</h2>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SideBar