import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import classnames from 'classnames'
import MainRoutes from './RenderRoutes'
import Sidebar from '@/layouts/Sidebar'
import { IStoreState } from '@/store/types'
import { SettingState } from '@/store/modules/setting'

import { Layout, Spin } from 'antd'

const { Header, Content, Footer } = Layout

const siderLayout = () => {
  const { layout, colorWeak, fixedHeader, contentWidth }: SettingState =
    useSelector((state: IStoreState) => state.settings)

  return (
    <Layout
      className={classnames('layout-wrap', {
        'layout-wrap--sidebar': layout === 'side',
        'layout-wrap--weak': colorWeak
      })}
    >
      <Sidebar />
      <Layout className="site-layout">
        <Header
          className={classnames('site-layout-header', {
            'site-layout-header--fix': fixedHeader,
            'site-layout-header--fixed':
              contentWidth === 'fixed' && layout === 'top'
          })}
        >
          Header
        </Header>
        <Content className="site-layout-content">
          <Suspense fallback={<Spin size="large" className="layout-loading" />}>
            <MainRoutes />
          </Suspense>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default siderLayout
