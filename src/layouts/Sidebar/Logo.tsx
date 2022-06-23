import React from 'react'

interface LogoProps {
  opened: boolean
  layout: 'side' | 'top'
}

const Logo = ({ opened, layout }: LogoProps) => {
  return <div className="site-sider__logo">LOGO</div>
}

export default Logo
