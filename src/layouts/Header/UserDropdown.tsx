import React from 'react'
import { Menu, Dropdown, Avatar } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'

const UserDropdown = () => {
  const username = '超级管理员'
  const menu = (
    <Menu>
      <Menu.Item icon={<UserOutlined />}>个人中心</Menu.Item>
      <Menu.Item icon={<LogoutOutlined />}>退出</Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu}>
      <div className="user-dropdown">
        <Avatar
          size="small"
          gap={5}
        >
          {username.charAt(0)}
        </Avatar>
        <span className="username">{username}</span>
      </div>
    </Dropdown>
  )
}

export default UserDropdown
