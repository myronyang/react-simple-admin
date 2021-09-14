import React from 'react'
import { IRoute } from './types'
import systemRoutes from './modules/system'
import errorRoutes from './modules/error'

const routes: IRoute[] = [
  { ...systemRoutes },
  {
    path: '/',
    component: React.lazy(() => import('../layouts/Container/MainContent')),
    meta: {
      title: '系统路由',
    },
    redirect: '/page/page1',
    children: [
      {
        path: '/goods',
        meta: {
          title: '商品管理',
          icon: 'goods',
        },
        component: React.lazy(() => import('../views/Goods'))
      },
      {
        path: '/order',
        meta: {
          title: '订单管理',
          icon: 'order',
        },
        component: React.lazy(() => import('../views/Order'))
      },
      {
        path: '/page',
        meta: {
          title: '一级路由',
          icon: 'page',
        },
        children: [
          {
            path: '/page/page1',
            meta: {
              title: '二级路由',
              icon: 'page1',
            },
            component: React.lazy(() => import('../views/Page/Page1'))
          },
          {
            path: '/page/page2',
            meta: {
              title: '二级路由',
              icon: 'page2',
            },
            component: React.lazy(() => import('../views/Page/Page2')),
            children: [
              {
                path: '/page/page2/page3',
                meta: {
                  title: '三级路由',
                  icon: 'page3',
                },
                component: React.lazy(() => import('../views/Page/Page2/Page11'))
              },
            ]
          },
        ]
      },
      ...errorRoutes
    ]
  },
  
]

export default routes
