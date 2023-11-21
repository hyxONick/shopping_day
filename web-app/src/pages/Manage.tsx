import React, { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import {Outlet} from 'react-router-dom';
import MainMenu from "../components/MainMenu";
const { Header, Content, Footer, Sider } = Layout;

const Manage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo-vertical" />
                <MainMenu />
            </Sider>
            <Layout>
                <Header style={{ paddingLeft: '16px', background: colorBgContainer }}>
                    <Breadcrumb style={{lineHeight: '64px'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content style={{ margin: '16px 16px 0' }} className="site-layout-background">
                    <Outlet />
                </Content>
                <Footer style={{ textAlign: 'center', padding: 0, lineHeight: "48px" }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default Manage;