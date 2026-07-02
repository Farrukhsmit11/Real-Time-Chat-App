import React from 'react'
import "./PageHeader.css"
import { MdOutlineNotifications } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { Avatar, Badge, Button, Dropdown, Input, Space } from "antd"
import { BellOutlined, MailOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";

const PageHeader = () => {
    return (

        <div className="page-header-wrapper">
            <div className='page-header'>
                <div className="page-header-left">
                    <h2 className='page-header-title'>Good Afternoon , Farrukh 👋</h2>
                    <p className='page-header-description'>Here,s What Happening Today</p>
                </div>

                <div className="page-header-right">
                    <Badge count={5} size="medium">
                        <div className="circle-icon">
                            <BellOutlined />
                        </div>
                    </Badge>

                    <Avatar className='user-avatar'>
                        FM
                    </Avatar>
                </div>
            </div>
        </div>
    )
}

export default PageHeader