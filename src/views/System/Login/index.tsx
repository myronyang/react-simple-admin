import React, { useState, useCallback } from 'react'
// import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

interface LoginProps extends RouteComponentProps {
  setUserInfo: (userInfo: Object) => void
}

const Login = (props: LoginProps) => {
  return <div>LOGIN</div>
}

export default Login
