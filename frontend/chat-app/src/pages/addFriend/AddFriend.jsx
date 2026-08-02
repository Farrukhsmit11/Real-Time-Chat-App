import React, { useState } from 'react'
import "./AddFriend.css"
import PageHeader from "../../components/pageHeader/PageHeader"
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Button, Input, Radio, Select } from 'antd'


const AddFriend = () => {
    return (
        <div className="add-friend-container">
            <div className="add-friend-header">
                <PageHeader
                    leftContent={
                        <div className="page-header-icon">
                            <Button className="header-back-icon">
                                <FaArrowLeftLong />
                            </Button>
                        </div>
                    }

                    rightContent={
                        <div className="page-header-title">
                            <h1 className='user-profile-title'>Add Friend</h1>
                        </div>
                    }

                ></PageHeader>
            </div>
        </div>
    )
}

export default AddFriend