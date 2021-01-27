import React from "react";
import { Layout, Menu, Card, Input } from "antd";
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
import { useEffect, useState } from "react";
import { getQuestion } from "../API_Calls/questions.js";
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const Body = (props) => {

  const [question, setQuestion] = useState("")
  const [category, setCategory] = useState([])
  const [timer, setTimer] = useState(0)

  const handleCategories = (newCategory) => {
    setCategory(newCategory)
  }

  const handleQuestions = () => {
    const randomCategory = category[Math.floor(Math.random() * category.length)]; // random category 
    if(category.length > 0) {
    getQuestion(randomCategory).then((res) => {
      setQuestion(res[0].question)
    }
    ) } else {
      setQuestion("Please select a category on the left hand menu")
    }
  }


  const { cookies, cookieSetter, cookieRemover } = props;

  const history = useHistory();

  const handleLogout = () => {
    cookieRemover();
    history.push({
      pathname: "/",
    });
  };

  useEffect(() => {
    if (!cookies["prepster-user-x0145"]) {
      history.push({
        pathname: "/",
      });
    }
    console.log(cookies)
  }, [cookies]);


  return (
    <Layout>
      <Header className="body-header">
        <p style={{ marginLeft: "20px" }}>Prepster</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <span
            style={{ marginRight: "10px", fontSize: "15px"}}
          >
            {cookies["prepster-user-x0145"]}
          </span>
          <Button
            type="primary"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </Header>

      <Layout>
        <Sider width={"280px"} className="body-sider">
          <SideMenu handleCategories={handleCategories}/>
        </Sider>
        <Content className="body-content" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <Card style={{ width: 300, height: 300 }} bordered={true}>
            <p>{question}</p>
          </Card>
          <Button
            type="primary"
            style={{ marginTop: "20px", marginBottom: "10px" }}
            onClick={handleQuestions}
          >
            Question Generator
          </Button>
          <Input style={{ width: '10%' }} placeholder="Timer (seconds)" />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Body;
