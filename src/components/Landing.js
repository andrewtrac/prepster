import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "../styles/landing.scss";
import 'antd/dist/antd.css';


const { Header, Content, Sider, Footer } = Layout;

export default function Landing() {
  return (
    <Layout>
      <Header className="landing-header"> </Header>
      <Content className="landing-main">
        <h1> Prepster</h1>
      </Content>
    </Layout>
  );
}
