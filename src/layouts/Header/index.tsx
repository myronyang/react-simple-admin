import React from 'react'
import { useSelector } from 'react-redux'
import classnames from 'classnames'
import UserDropdown from './UserDropdown'
import { Layout, Space } from 'antd'
import { SearchOutlined, FullscreenOutlined } from '@ant-design/icons'

import SettingModal from './SettingModal'
import SidebarMain from '../Sidebar/SidebarMain'

import { IStoreState } from '@/store/types'
import { SettingState } from '@/store/modules/setting'

import './index.less'

const Header = () => {
  const { layout, fixedHeader, contentWidth }: SettingState = useSelector(
    (state: IStoreState) => state.settings
  )

  return (
    <Layout.Header
      className={classnames('site-layout-header', {
        'site-layout-header--fix': fixedHeader,
        'site-layout-header--fixed': contentWidth === 'fixed'
      })}
    >
      <div style={{ flex: '1 1 0%' }}>
        {layout === 'top' && <SidebarMain />}
      </div>
      <div className="content-right">
        <Space>
          <SearchOutlined />
          <FullscreenOutlined />
          <SettingModal />
          <UserDropdown />
        </Space>
      </div>
    </Layout.Header>
  )
}

export default Header
