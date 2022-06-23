import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd'

interface LoginFromProps {
  setUserInfo: (userInfo: Object) => void
}

interface LoginFromValues {
  username: string
  password: string
  remember?: boolean
}

const LoginForm = (props: LoginFromProps) => {
  const history = useHistory()

  const onFinish = (values: LoginFromValues) => {
    const params = new URLSearchParams(window.location.search)
    const redirectURL = params.get('redirectURL')
    if (redirectURL) {
      window.location.href = redirectURL
      return
    }
    history.push('/')
  }

  return (
    <Form
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="账号"
        name="username"
        rules={[{ required: true, message: '请输入账号!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>记住密码</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
