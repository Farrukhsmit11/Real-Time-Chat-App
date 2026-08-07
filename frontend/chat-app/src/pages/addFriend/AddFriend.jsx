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
        subtitle : ""
    }

    return (
        <>
            <div className="add-friend-container">
                <div className="add-friend-header">
                    <PageHeader
                        // leftContent={
                        //     <div className="page-header-icon">
                        //         <Button className='back-button' onClick={() => navigate("/")} >
                        //             <FaArrowLeftLong className="header-back-icon" />
                        //         </Button>
                        //     </div>
                        // }
                        headerProps={headerProps}
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