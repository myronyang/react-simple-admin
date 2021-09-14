import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import Container from '@/layouts/Container'
import './assets/styles/index.less'

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Container />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
)
