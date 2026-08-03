import React from 'react'
import { Divider, Input, Layout } from "antd"
import Sider from 'antd/es/layout/Sider'
import { settingsData } from './data'
import PageHeader from "../../components/pageHeader/PageHeader"
import "./Settings.css"
import { SearchOutlined } from '@ant-design/icons'
import UserAvatar from '../../components/userAvatar/UserAvatar'
import { Content } from 'antd/es/layout/layout'

const Settings = () => {
    return (
        <Layout hasSider>
            <Sider width={500} className="settings-sider">
                <div className="settings-header-main">
                    <div className="settings-header-left">
                        <PageHeader
                            leftContent={
                                <h1 className='settings-header-title'>Settings</h1>
                            }
                        ></PageHeader>
                    </div>
                </div>

                <div className="input-group">
                    <Input placeholder='Search Settings' suffix={<SearchOutlined className='search-icon' />} className="search-input"></Input>
                </div>

                <div className="settings-list-main">
                    {settingsData.map((item) => {
                        return (
                            <div key={item.id} className='list-item'>
                                <div className="settings-item-icon">
                                    <span style={{ color: item.color }}>{item.icon}</span>
                                </div>
                                <div className='tools-details'>
                                    <h1 className='list-item-title'>{item.title}</h1>
                                    <span className='list-item-description'>{item.description}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Sider>

            <Layout>
                <Content>
                    <div className="settings-content">

                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Settings