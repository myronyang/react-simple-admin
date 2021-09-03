import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import classnames from 'classnames'
import Logo from './Logo'
import renderMenuItems from './MenuItems'
import MenuFold from './MenuFold'
import { Layout, Menu } from 'antd'

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
  const [collapsed, setCollapsed] = useState(false)

  const { global, settings }: LayoutSideBarProps = useSelector(
    (state: IStoreState) => state
  )
  const { sidebar, routes } = global
  const { layout, theme } = settings

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
      <Logo opened={!sidebar.opened} layout={layout} />
      <Menu
        className="site-sider__menu"
        defaultSelectedKeys={[pathname]}
        defaultOpenKeys={[pathname]}
        mode={layout === 'side' ? 'inline' : 'horizontal'}
        theme={theme}
        inlineCollapsed={collapsed}
      >
        {routes.map((menu: IRoute) => renderMenuItems(menu))}
      </Menu>
      <MenuFold collapsed={collapsed} setCollapsed={setCollapsed} />
    </Sider>
  )
}

export default SideBar
