import { Spin } from 'antd'
import React from 'react'
import "./Loader.css"

const Loader = () => {
    return (
        <div className='ant-loading-page'>
            <Spin size='large'></Spin>
        </div>
    )
}

export default Loader