import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { registerUser, loginUser } from "../API_Calls/users.js";
import { useHistory } from 'react-router-dom'


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



const Login = (props) => {
  const [formValues, setValues] = useState({});
  const [loginError, setLoginError] = useState(false);

  const { cookieSetter } = props


  const history = useHistory();

  const getUserLogin = async (email, password) => {
    return loginUser(email).then((res) => {return res})
    .catch((error) => {
      setLoginError(true)
    });
  }


  // values is in object format format
  const onFinish = async (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChangeForm = (event) => {
    if (event.currentTarget.name === "password") {
      let newFormValues = {
        ...formValues,
        password: event.currentTarget.value,
      };
      setValues(newFormValues);
    } else if (event.currentTarget.name === "email") {
      let newFormValues = {
        ...formValues,
        email: event.currentTarget.value,
      };
      setValues(newFormValues);
    }
  };

  const handleRegister = (event) => {
    registerUser(formValues.email, formValues.password)
    history.push({
      pathname: '/home'})
  }

  const handleLogin = (event) => {
    getUserLogin(formValues.email).then(res => {
      if (res && res.password === formValues.password) {
        setLoginError(false)
        cookieSetter(formValues.email)
         history.push({
          pathname: '/home'})
      } else {
        setLoginError(true)
      }
    })
  }
    


  return (
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
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input name="email" onChange={handleChangeForm} />
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
        <Input.Password name="password" onChange={handleChangeForm} />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" name="login" onClick={handleLogin}>
          Submit
        </Button>
        <Button style={{ marginLeft: "10px" }} onClick={handleRegister} type="primary">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
