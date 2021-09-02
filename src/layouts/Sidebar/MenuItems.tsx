import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

import {
  MenuUnfoldOutlined,
  MenuOutlined,
  UserOutlined,
  TeamOutlined,
  DashboardOutlined,
  ReadOutlined
} from '@ant-design/icons'
import { IRoute, IRouteMeta } from '@/router/types'

const { SubMenu, Item } = Menu

const iconMap: { [prop: string]: any } = {
  MenuUnfoldOutlined: <MenuUnfoldOutlined />,
  MenuOutlined: <MenuOutlined />,
  UserOutlined: <UserOutlined />,
  TeamOutlined: <TeamOutlined />,
  DashboardOutlined: <DashboardOutlined />,
  ReadOutlined: <ReadOutlined />
}

const renderTitle = (meta: IRouteMeta) => (
  <span className="menu-item-inner">
    {meta.icon && iconMap[meta.icon]}
    <span className="menu-title"> {meta.title} </span>
  </span>
)

const renderMenuRoute = (menu: IRoute) => (
  <Item key={menu.path}>
    <Link to={menu.path}>{renderTitle(menu.meta)}</Link>
  </Item>
)

const renderSubMenu = (menu: IRoute) => (
  <SubMenu title={renderTitle(menu.meta)} key={menu.path}>
    {menu.children!.map((item: IRoute) =>
      item.children ? renderSubMenu(item) : renderMenuRoute(item)
    )}
  </SubMenu>
)

const renderMenuItems = (menu: IRoute) => {
  if (menu.children) {
    return renderSubMenu(menu)
  }
  return renderMenuRoute(menu)
}

export default renderMenuItems
