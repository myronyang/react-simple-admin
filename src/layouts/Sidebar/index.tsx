import React from 'react'
import { useSelector } from 'react-redux'
import classnames from 'classnames'
import Logo from './Logo'
import renderMenuItems from './MenuItems'
import { Menu } from 'antd'

import { IRoute } from '@/router/types'
import { IStoreState } from '@/store/types'
import { GlobalState } from '@/store/modules/global'
import { SettingState } from '@/store/modules/setting'

interface LayoutSideBarProps {
  global: GlobalState
  settings: SettingState
}

const SideBar = () => {
  const { global, settings }: LayoutSideBarProps = useSelector(
    (state: IStoreState) => state
  )
  const { sidebar, routes } = global
  const { layout, theme } = settings

  const { pathname } = window.location

  const inlineCollapsed: {
    inlineCollapsed?: boolean
  } = {}

  return (
    <aside
      className={classnames(
        'layout-sidebar',
        `layout-sidebar--${theme}`,
        `layout-sidebar--${layout}`,
        {
          'layout-sidebar--close': !sidebar.opened && layout === 'side'
        }
      )}
    >
      <div className={`layout-sidebar__logo--${layout}`}>
        <Logo opened={!sidebar.opened} layout={layout} />
      </div>
      <div className="layout-sidebar__menu">
        <Menu
          defaultSelectedKeys={[pathname]}
          mode={layout === 'side' ? 'inline' : 'horizontal'}
          theme={theme}
          {...inlineCollapsed}
        >
          {routes.map((menu: IRoute) => renderMenuItems(menu))}
        </Menu>
      </div>
    </aside>
  )
}

export default SideBar
