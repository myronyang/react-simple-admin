import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import classnames from 'classnames'
import MainRoutes from './RenderRoutes'
import Sidebar from '@/layouts/Sidebar'
import { IStoreState } from '@/store/types'
import { SettingState } from '@/store/modules/setting'

import { Layout, Spin } from 'antd'

const { Header, Sider, Content, Footer } = Layout

const siderLayout = () => {
  const { layout, colorWeak, fixedHeader, contentWidth }: SettingState =
    useSelector((state: IStoreState) => state.settings)

  return (
    <div
      className={classnames('layout-wrap', {
        'layout--sidebar': layout === 'side',
        'layout--weak': colorWeak
      })}
    >
      <Sidebar />
      <div className="layout-container">
        <header className="layout-header">Header</header>
        <main
          className={classnames('layout-main', {
            'layout-main--fix': fixedHeader,
            'layout-main--fixed': contentWidth === 'fixed' && layout === 'top'
          })}
        >
          <Suspense
            fallback={<Spin size="large" className="layout-loading" />}
          >
            <MainRoutes />
          </Suspense>
        </main>
        <footer className="layout-footer">Footer</footer>
      </div>
    </div>
    // <Layout className="layout-wrap">
    //   <Sider trigger={null} collapsible collapsed={false}>
    //     <Sidebar />
    //   </Sider>
    //   <Layout className="site-layout">
    //     <Header className="site-layout-background">Header</Header>
    //     <Content>
    //       <Suspense fallback={<Spin size="large" className="layout-loading" />}>
    //         <MainRoutes />
    //       </Suspense>
    //     </Content>
    //     <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    //   </Layout>
    // </Layout>
  )
}

export default siderLayout
