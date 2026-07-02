import React from 'react'
import "./Dashboard.css"
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';
import { Layout, Menu, theme } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import SideBar from '../../components/sideBar/SideBar';
import PageHeader from '../../components/pageHeader/PageHeader';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const currentYear = new Date().getFullYear();

    const { Header, Content, Footer, Sider } = Layout;
    const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
        (icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
        }),
    );

    return (
        <div className="dashboard-wrapper">
            <SideBar />

            <Layout className="dashboard-content-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <PageHeader />
                </Header>

                <Content style={{ margin: "24px 16px 0" }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </div>
    )
}

export default Dashboard