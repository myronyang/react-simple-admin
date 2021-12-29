import React from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { Menu } from 'antd'
import Logo from './Logo'
import { renderMenuItems } from './MenuItems'

import { IRoute } from '@/router/types'
import { IStoreState } from '@/store/types'
import { GlobalState } from '@/store/modules/global'
import { SettingState } from '@/store/modules/setting'

interface LayoutSideBarProps {
  global: GlobalState
  settings: SettingState
}

const SidebarMain = () => {
  const { global, settings }: LayoutSideBarProps = useSelector(
    (state: IStoreState) => state
  )

  const { sidebar, routes } = global
  const { layout, theme } = settings

  const { pathname } = window.location

  return (
    <div
      className={classNames('site-sider-main', `site-sider-main--${layout}`)}
    >
      <Logo opened={!sidebar.opened} layout={layout} />
      <Menu
        className="site-sider__menu"
        defaultSelectedKeys={[pathname]}
        defaultOpenKeys={[pathname]}
        mode={layout === 'side' ? 'inline' : 'horizontal'}
        theme={theme}
      >
        {routes.map((menu: IRoute) => renderMenuItems(menu))}
      </Menu>
    </div>
  )
}

export default SidebarMain
