import React from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

interface MenuFoldProps {
  collapsed: boolean
  setCollapsed: (status: boolean) => void
}

const MenuFold = ({ collapsed, setCollapsed }: MenuFoldProps) => {
  return (
    <div className="site-sider__menu-Fold">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => {
          setCollapsed(!collapsed)
        }
      })}
    </div>
  )
}
export default MenuFold
