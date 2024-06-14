import React from 'react'
import { Card, Layout, Menu, theme } from 'antd'
import { NavLink } from 'react-router-dom'

const { Header, Content, Footer } = Layout
const items = [
  { key: 'home', label: <NavLink to="/home">Home</NavLink> },
  { key: 'Add', label: <NavLink to="/add">Add</NavLink> },
  { key: 'About', label: <NavLink to="/About">About</NavLink> },
]
const Basiclayout = (props) => {
  return (
    <Layout
      style={{
        height: '100vh',
      }}
    >
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        ></Menu>
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}

        <Card
          style={{
            height: '100%',
          }}
        >
          {props.children}
        </Card>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  )
}
export default Basiclayout
