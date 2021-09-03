import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import * as Icons from '@ant-design/icons'
import { IRoute, IRouteMeta } from '@/router/types'

const { SubMenu, Item } = Menu

const renderTitle = (meta: IRouteMeta) => (
  <span className="menu-item-inner">
    {meta.icon && React.createElement((Icons as any)[meta.icon])}
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
