import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "../styles/body.scss";
import "antd/dist/antd.css";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const Body = (props) => {
  return (
    <Layout>
      <Header className="body-header">Header</Header>

      <Layout>
        <Sider className="body-sider">Sider</Sider>

        <Content className="body-content">Content</Content>
      </Layout>
      <Footer className="body-footer">Footer</Footer>

    </Layout>
  );
};

export default Body;
