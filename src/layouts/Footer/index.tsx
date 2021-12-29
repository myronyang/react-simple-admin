import React from 'react'
import { Layout } from 'antd'
import DefaultConfig from '@/config'

const Header = () => {
  return (
    <Layout.Footer className="site-layout-footer" style={{textAlign: 'center'}}>
      {DefaultConfig.copyright}
    </Layout.Footer>
  )
}

export default Header
