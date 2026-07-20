import React from 'react'
import "./SideBar.css"
import sidebarLogo from "../../assets/right-sidebar-logo.png"
import { SlOptionsVertical } from "react-icons/sl";
import { Avatar, Button, Divider, Form, Input, Popover, Radio, Spin } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import axios from "axios"
import avatarImg from "../../assets/avatar-img.jfif"
import { FiEdit2 } from "react-icons/fi"
import { TbTrash } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom"
import { message } from "antd"
import { getInitials } from "../../utils/helper.js"
import UserAvatar from '../userAvatar/UserAvatar.jsx';

const SideBar = ({ onSelectUser }) => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [size, setSize] = useState()

    const [searchText, setSearchText] = useState("");

    const BASE_URL = "http://localhost:5000"

    const navigate = useNavigate()

    useEffect(() => {
        const response = axios.get(`${BASE_URL}/getUsers`)
            .then(response => {
                setUsers(response.data.res)
            })
            .catch(error => {
                console.error("error fetching users", error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    const handleLogout = async () => {
        try {
            const isLogout = await axios.post(`${BASE_URL}/logoutUser`, {

            },
                { withCredentials: true }
            )

            navigate("/login")
        } catch (error) {
            console.error("user logout failed", error)
        }
    }

    const handleSearch = async (e) => {
        try {
            const data = await axios.get(`${BASE_URL}/search-users`, {
                params: {
                    query: searchText
                },
                withCredentials: true
            })
            const isSearch = data?.data.data
            setUsers(data.data.data)
            message.success("Users Search Sucessfully")
        } catch (error) {
            if (error.response) {
                message.error(error.response.data.message)
            }
            console.error("Something went wrong in search", error)
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-logo-section">
                    <img src={sidebarLogo} className='sidebar-logo' />
                    <div className="icon-right">
                    </div>
                </div>
            </div>

            <div className="input-main">
                <Form enctype="multipart/form-data">
                    <Input
                        placeholder='Search Conversations'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        suffix={
                            <Button
                                onClick={() => handleSearch()}
                                className='search-users-btn'
                                icon={
                                    <SearchOutlined className='search-icon' />
                                }>
                            </Button>
                        }
                        className='conversation-input'
                    ></Input>
                </Form>
            </div>

            <div className="input-section">
                {isLoading ? (
                    <Spin size='large'></Spin>
                ) : (
                    <ul className='users-list'>
                        {
                            users.map((item) => {
                                return (
                                    <>
                                        <li key={item.id} className='user-item' onClick={() => {
                                            onSelectUser(item)
                                        }
                                        }
                                        >
                                            <UserAvatar name={item.name} />

                                            <h2 className='users-name'>{item.name}</h2>

                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                )}
            </div>

            <div className="logout-section">
                <Divider />
                <a href='#' className='sidebar-link'>
                    <div className="sidebar-inner-content">
                        <Button
                            onClick={() => handleLogout()}
                            className='logout-btn'
                            icon={
                                <LuLogOut className='logout-icon' />
                            }>
                            <h1 className='logout-title'>Logout</h1>
                        </Button>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default SideBar