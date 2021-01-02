import React from "react";
import { Layout} from "antd";
import Login from './Login.js'
import { useHistory } from 'react-router-dom'
import "../styles/landing.scss";
import 'antd/dist/antd.css';


const { Header, Content} = Layout;

export default function Landing(props) {

  const { cookies, cookieSetter } = props
  const history = useHistory();

  if(cookies) {
    history.push({
      pathname: '/home'})
  }

  console.log(cookies)
  
  return (
    <Layout>
      <Header className="landing-header"> </Header>
      <Content className="landing-main">
        <span style={{fontSize: "100px"}}>Prepster</span>
        <Login cookieSetter={cookieSetter}/>
      </Content>
    </Layout>
  );
}
