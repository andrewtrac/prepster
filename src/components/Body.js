import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import SideMenu from "./SideMenu";
import { Button } from "antd";
import "../styles/body.scss";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const Body = (props) => {
  const { cookies, cookieSetter, cookieRemover } = props;

  const history = useHistory();

  const handleLogout = () => {
    cookieRemover();
    history.push({
      pathname: "/",
    });
  };

  //  useEffect(() => {
  //     if (!cookies["prepster-user-x0145"]) {
  //     history.push({
  //        pathname: "/",
  //    });
  //    }
  // }, []);

  console.log(cookies)


  return (
    <Layout>
      <Header className="body-header">
        <p style={{ marginLeft: "20px" }}>Prepster</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p style={{ marginRight: "10px", fontSize: "20px" }}>Test</p>
          <Button type="primary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
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
