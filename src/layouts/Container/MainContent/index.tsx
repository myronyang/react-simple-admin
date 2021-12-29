import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import classnames from 'classnames'
import RenderRoutes from './RenderRoutes'

import Sidebar from '@/layouts/Sidebar'
import Header from '@/layouts/Header'
import TabsNav from '@/layouts/TabsNav'
import Footer from '@/layouts/Footer'
import { Layout, Spin } from 'antd'

import { IStoreState } from '@/store/types'
import { SettingState } from '@/store/modules/setting'

const MainContent = () => {
  const { layout, collapsed, contentWidth, fixedHeader }: SettingState = useSelector(
    (state: IStoreState) => state.settings
  )

  return (
    <Layout
      className={classnames('layout-wrap')}
    >
      {layout !== 'top' && <Sidebar />}
      <Layout
        className={classnames('site-layout', `site-layout--${layout}`, {
          'site-layout__fold': collapsed,
          'site-layout--fixed': fixedHeader
        })}
      >
        <Header />
        {/* <TabsNav /> */}
        <Layout.Content className="site-layout-content">
          <div
            className={classnames(
              'site-layout-nesting',
              `layout-nesting__${contentWidth}`
            )}
          >
            <Suspense
              fallback={<Spin size="large" className="layout-loading" />}
            >
              <RenderRoutes />
            </Suspense>
          </div>
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  )
}

export default MainContent
