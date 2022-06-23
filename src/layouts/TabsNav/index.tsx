import React from 'react'
import classnames from 'classnames'
import { Menu, Dropdown, Avatar } from 'antd'
import { CloseOutlined, FullscreenOutlined } from '@ant-design/icons'
import './index.less'

const TabsNav = () => {
  return (
    <div className="site-tabs-nav">
      <div className="site-tabs-nav__inner">
        <ul className="tabs-nav-wrap">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <li
              className={classnames('tabs-nav-item', {
                'tabs-nav-item__active': index === 2
              })}
              key={index}
            >
              <label className="tab-title">商品管理</label>
              <CloseOutlined />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TabsNav
