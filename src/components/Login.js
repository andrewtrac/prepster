import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { registerUser } from "../API_Calls/users.js";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = () => {
  const [loginForm, setLogin] = useState(true);

  // values is in object format format
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChangeForm = (event) => {
    let newForm = !loginForm;
    setLogin(newForm);
  };

  return (
    <>
      {loginForm && (
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              style={{ marginLeft: "10px" }}
              type="primary"
              onClick={handleChangeForm}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default Login;
