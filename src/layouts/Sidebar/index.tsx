import React from 'react'
import { useSelector } from 'react-redux'
import classnames from 'classnames'
import SidebarMain from './SidebarMain'
import MenuFold from './MenuFold'
import { Layout } from 'antd'

import { IRoute } from '@/router/types'
import { IStoreState } from '@/store/types'
import { GlobalState } from '@/store/modules/global'
import { SettingState } from '@/store/modules/setting'

import './index.less'

interface LayoutSideBarProps {
  global: GlobalState
  settings: SettingState
}

const { Sider } = Layout

const SideBar = () => {
  const { global, settings }: LayoutSideBarProps = useSelector(
    (state: IStoreState) => state
  )
  const { sidebar, routes } = global
  const { layout, theme, collapsed } = settings

  const { pathname } = window.location

  return (
    <Sider
      className={classnames(
        'site-sider',
        `site-sider--${theme}`,
        `site-sider--${layout}`,
        {
          'site-sider--close': !sidebar.opened && layout === 'side'
        }
      )}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <SidebarMain />
      <MenuFold collapsed={collapsed} />
    </Sider>
  )
}

export default SideBar
