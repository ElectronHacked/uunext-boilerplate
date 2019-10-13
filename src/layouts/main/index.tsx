import React, { useState, FC, ReactNode } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { LayoutHeader, LayoutHeaderTitle } from './styled';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface IMainLayoutProps {
  title?: ReactNode;
  children?: ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({ title, children }) => {
  const [collapsed, toggleCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <LayoutHeader>
          <LayoutHeaderTitle>{title}</LayoutHeaderTitle>
        </LayoutHeader>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by Phil @ 2019</Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
