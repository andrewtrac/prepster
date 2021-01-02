import React from "react";
import { Layout } from "antd";
import { useEffect } from "react";
import Login from "./Login.js";
import { useHistory } from "react-router-dom";
import "../styles/landing.scss";
import "antd/dist/antd.css";

const { Header, Content } = Layout;

export default function Landing(props) {
  const { cookies, cookieSetter } = props;
  const history = useHistory();

  useEffect(() => {
    if (cookies["prepster-user-x0145"]) {
      history.push({
        pathname: "/home",
      });
    }
  }, [cookies]);

  console.log(cookies)

  return (
    <Layout>
      <Header className="landing-header"> </Header>
      <Content className="landing-main">
        <span style={{ fontSize: "100px" }}>Prepster</span>
        <Login cookieSetter={cookieSetter} />
      </Content>
    </Layout>
  );
}
