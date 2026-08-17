import React, { useState } from 'react'
import "./AddFriend.css"
import PageHeader from "../../components/pageHeader/PageHeader"
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Button, Tabs } from 'antd'
import { useNavigate } from "react-router-dom"
import { items } from '.'

const AddFriend = () => {

    const navigate = useNavigate();

    const headerProps = {
        renderGoBack : true,
        title : "Add Friend",
        subtitle : "",
        className: "add-friend-header"
    }

    return (
        <>
            <div className="add-friend-container">
                <div className="add-friend-header">
                    <PageHeader
                        {...headerProps}
                    ></PageHeader>
                </div>

                <div className='table-filters'>
                    <Tabs defaultActiveKey="users" items={items} />
                </div>
            </div>
        </>
    )
}

export default AddFriend