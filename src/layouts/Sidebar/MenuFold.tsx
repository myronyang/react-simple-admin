import React from 'react'
import { useDispatch } from 'react-redux'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { updateLayoutSettings } from '@/store/modules/setting'

interface MenuFoldProps {
  collapsed: boolean
}

const MenuFold = ({ collapsed }: MenuFoldProps) => {
  const dispatch = useDispatch()
  return (
    <div className="site-sider__menu-Fold">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () =>
          dispatch(
            updateLayoutSettings({
              collapsed: !collapsed
            })
          )
      })}
    </div>
  )
}
export default MenuFold
