import React from 'react'

const errorRoutes = [
  {
    path: '/error',
    meta: {
      title: '错误页面',
    },
    redirect: '/error/404',
    children: [
      {
        path: '/error/404',
        auth: false,
        component: React.lazy(() => import('@/views/Error/404')),
        meta: {
          title: '页面不存在',
        },
      },
      {
        path: '/error/403',
        auth: false,
        component: React.lazy(() => import('@/views/Error/403')),
        meta: {
          title: '暂无权限',
        },
      },
    ],
  },
  {
    path: '/*',
    meta: {
      title: '错误页面',
    },
    redirect: '/error/404',
  }
]


export default errorRoutes