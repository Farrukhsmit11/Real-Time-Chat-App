import React from 'react'
import "./PageHeader.css"
import { Button } from 'antd'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { ConditionalRendering } from './../../utils/helper'

const PageHeader = ({ ...headerProps }) => {
    console.log(headerProps)
    const navigate = useNavigate()

    const { title, subtitle, renderGoBack } = headerProps

    return (
        <div className='page-header-container'>
            <div className="page-header">
                <div className="page-header-left">
                    <ConditionalRendering
                        condition={renderGoBack}
                        children={
                            <div className="page-header-icon">
                                <Button className='back-button' onClick={() => navigate("/")} >
                                    <FaArrowLeftLong className="header-back-icon" />
                                </Button>
                            </div>
                        }
                    />
                </div>

                <ConditionalRendering
                    condition={renderGoBack}
                    children={
                        <div className="page-header-icon">
                            <Button className='back-button' onClick={() => navigate("/")} >
                                <FaArrowLeftLong className="header-back-icon" />
                            </Button>
                        </div>
                    }
                />


                <div className="page-header-right">
                    <ConditionalRendering
                        condition={title}
                        children={
                            <div className="page-header-title">
                                <h1 className='add-friend-title'>{title}</h1>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default PageHeader