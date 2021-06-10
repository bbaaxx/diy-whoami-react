import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout, Menu, Breadcrumb } from 'antd';

import { ResumeView } from 'app/features/ResumeView';

const { Header, Content, Footer } = Layout;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Whoami</title>
        <meta
          name="description"
          content="Whoami, your standard resume utility"
        />
      </Helmet>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{ padding: '24px 0' }}
          >
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <ResumeView />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
}
