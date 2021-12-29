import React from 'react'
import { Row, Col } from 'antd'
import LoginForm from './LoginForm'
import loginBoxBg from '@/assets/images/login-box-bg.svg'
import DefaultConfig from '@/config/index'
import './index.less'

const Login = () => (
  <div className="page-wrap" id="login-page">
    <Row className="row-wrap">
      <Col className="col-left" span={15}>
        <img src={loginBoxBg} width="275" />
      </Col>
      <Col className="col-right" span={9}>
        <p className="title">{DefaultConfig.title}</p>
        <LoginForm />
      </Col>
    </Row>
  </div>
)

export default Login
