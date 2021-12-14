import React from 'react'

const systemRoutes = {
  path: '/system',
  component: React.lazy(() => import('@/layouts/Container/FullScreen')),
  meta: {
    title: '系统路由'
  },
  redirect: '/system/login',
  children: [
    {
      path: '/system/login',
      meta: {
        title: '登录',
        icon: 'login'
      },
      component: React.lazy(() => import('@/views/System/Login'))
    }
  ]
}

export default systemRoutes
