import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import '../styles/body.scss'
import 'antd/dist/antd.css';


const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;




const Body = (props) => {

  return (


    <Layout>
    <Sider>Sider</Sider>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>



  )


}

export default Body;