import React from 'react'
import "./SideBar.css"
import sidebarLogo from "../../assets/right-sidebar-logo.png"
import { SlOptionsVertical } from "react-icons/sl";
import { Avatar, Button, Divider, Form, Input, Popover, Radio, Spin } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { useState } from 'react';
import { useEffect } from 'react';
import avatarImg from "../../assets/avatar-img.jfif"
import { FiEdit2 } from "react-icons/fi"
import { TbTrash } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom"
import { message } from "antd"
import { getInitials } from "../../utils/helper.js"
import UserAvatar from '../userAvatar/UserAvatar.jsx';
import { useDispatch, useSelector } from "react-redux"
import { getUsers, handleSearch } from '../../store/features/users/userThunk.js';
import { handleLogout } from '../../store/features/auth/authThunk.js';

const SideBar = ({ onSelectUser }) => {

    const [size, setSize] = useState()

    const [searchText, setSearchText] = useState("");

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const { users, selectedUser, loading } = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const onSearch = async () => {
        dispatch(handleSearch(searchText))
    }

    const onCancel = () => {
        dispatch(handleLogout())
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
                        autoComplete='true'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        suffix={
                            <Button
                                onClick={() => onSearch()}
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

                {loading ? (
                    <Spin size='large'></Spin>
                ) : (
                    <ul className='users-list'>
                        {
                            users?.map((item) => {
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
                            onClick={() => onCancel()}
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