import React from 'react'
import "./SideBar.css"
import sidebarLogo from "../../assets/right-sidebar-logo.png"
import { SlOptionsVertical } from "react-icons/sl";
import { Avatar, Button, Form, Input, Popover, Radio, Spin } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import axios from "axios"
import avatarImg from "../../assets/avatar-img.jfif"
import { FiEdit2 } from "react-icons/fi"
import UserAvatar from '../userAvatar/UserAvatar';
import { TbTrash } from "react-icons/tb";


const SideBar = ({ onSelectUser }) => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [size, setSize] = useState()

    const BASE_URL = "http://localhost:5000"

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


    const content = (
        <div>
            <p>My Profile</p>
            <p>Settings</p>
            <Button icon={<TbTrash />} danger>Logout</Button>
        </div>
    );


    const newTabIndex = useRef(0);
    const add = () => {
        const newActiveKey = `newTab${newTabIndex.current++}`;
        setItems([
            ...(items || []),
            {
                label: 'New Tab',
                key: newActiveKey,
                children: 'Content of new Tab',
            },
        ]);
        setActiveKey(newActiveKey);
    };
    const remove = targetKey => {
        if (!items) {
            return;
        }
        const targetIndex = items.findIndex(item => item.key === targetKey);
        const newItems = items.filter(item => item.key !== targetKey);
        if (newItems.length && targetKey === activeKey) {
            const newActiveKey =
                newItems[targetIndex === newItems.length ? targetIndex - 1 : targetIndex].key;
            setActiveKey(newActiveKey);
        }
        setItems(newItems);
    };
    const onEdit = (targetKey, action) => {
        if (action === 'add') {
            add();
        } else {
            remove(targetKey);
        }
    };
    const onChange = e => {
        setSize(e.target.value);
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-logo-section">
                    <img src={sidebarLogo} className='sidebar-logo' />
                    <div className="icon-right">
                        <Popover content={content} trigger="click">
                            <UserAvatar />
                        </Popover>
                    </div>
                </div>
            </div>

            <div className="input-main">
                <Form enctype="multipart/form-data">
                    <Input placeholder='Search Conversations' prefix={<SearchOutlined className='search-icon' />} className='conversation-input'></Input>


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
                                            <div className='image-main'>
                                                <Avatar className='avatar-img' />
                                            </div>
                                            <h2 className='users-name'>{item.name}</h2>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                )}
            </div>

        </div>
    )
}

export default SideBar