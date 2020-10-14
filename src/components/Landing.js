import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import Login from './Login.js'
import "../styles/landing.scss";
import 'antd/dist/antd.css';


const { Header, Content, Sider, Footer } = Layout;

export default function Landing() {
  return (
    <Layout>
      <Header className="landing-header"> </Header>
      <Content className="landing-main">
        <span style={{fontSize: "100px"}}>Prepster</span>
        <Login/>
      </Content>
    </Layout>
  );
}
