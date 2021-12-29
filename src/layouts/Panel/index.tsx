import React from 'react'
import './index.less'

const Panel = ({ title, children }) => {
  return (
    <div className="site-panel">
      <div className="site-panel-title">{title}</div>
      <div className="site-panel-content">{children}</div>
    </div>
  )
}

export default Panel
