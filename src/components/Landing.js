import React from "react";
import { Layout} from "antd";
import Login from './Login.js'
import "../styles/landing.scss";
import 'antd/dist/antd.css';


const { Header, Content} = Layout;

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
