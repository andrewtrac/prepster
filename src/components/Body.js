import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import SideMenu from "./SideMenu";
import "../styles/body.scss";
import "antd/dist/antd.css";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const Body = (props) => {
  return (
    <Layout>
      <Header className="body-header">
        <p style={{ marginLeft: "20px" }}>Prepster</p>
      </Header>

      <Layout>
        <Sider width={"280px"} className="body-sider">
          <SideMenu />
        </Sider>

        <Content className="body-content"></Content>
      </Layout>
    </Layout>
  );
};

export default Body;
