import React, { FormEventHandler, useState, useContext, useEffect } from "react";
import { Button, Form, Input } from "antd";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "gql/auth";
import { useHistory } from "react-router-dom";

import AppContext from "context";

import styles from "./Login.module.scss";

interface ILoginForm {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  console.log("LOGIN");
  const context = useContext(AppContext);
  const history = useHistory();

  const [formValue, setFormValue] = useState<ILoginForm>({
    username: "",
    password: "",
  });
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: {
      loginData: { ...formValue },
    },
  });

  useEffect(() => {
    if (context.token) {
      history.push("/home");
    }
  }, [context.token]);

  const onFieldChange: FormEventHandler<HTMLFormElement> = (newValue) => {
    const newForm = { ...formValue, ...newValue };
    setFormValue(newForm);
  };

  const onFinish = async () => {
    try {
      console.log(formValue);
      const result = await login();
      if (result?.data?.login?.token) {
        console.log(result.data.login.token);
        context.token = result.data.login.token;
        history.push("/home");
      }
    } catch (err) {
      // console.log(err);
    }
  };
  const onFinishFailed = () => {
    console.log("fail");
  };

  return (
    <div className={styles.container}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        className={styles.form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={onFieldChange}
      >
        <Form.Item
          id={"username"}
          label={"Username"}
          name={"username"}
          rules={[{ required: true, message: "Please input your username!" }]}
          required={false}
        >
          <Input />
        </Form.Item>
        <Form.Item
          id={"password"}
          label={"Password"}
          name={"password"}
          rules={[{ required: true, message: "Please input your password!" }]}
          required={false}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
