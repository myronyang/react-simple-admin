import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { Spin } from 'antd'
import { IRoute } from '@/router/types'
import Transition from '@/components/Transition'
import { setSideBarRoutes } from '@/store/modules/global'

interface AsyncRoutesProps {
  init?: boolean
  children: React.ReactNode
}

const SYS_ROUTES = [
  {
    authType: 'menuAuth',
    icon: 'InstagramFilled',
    id: '1400265859859210242',
    pid: null,
    path: '/goods',
    sort: 2,
    title: '商品管理'
  },
  // {
  //   authType: 'menuAuth',
  //   id: '1400265859859210898',
  //   pid: '1400265859859210242',
  //   path: '/goods/detail',
  //   sort: null,
  //   title: '商品详情'
  // },
  {
    authType: 'menuAuth',
    icon: 'FacebookFilled',
    id: '1400265859859210243',
    pid: null,
    path: '/order',
    sort: 1,
    title: '订单管理'
  },
  {
    authType: 'menuAuth',
    icon: 'LinkedinFilled',
    id: '1400265859859210123',
    pid: null,
    path: '/page',
    sort: 1,
    title: '多级路由'
  },
  {
    authType: 'menuAuth',
    id: '1400265859859210456',
    pid: '1400265859859210123',
    path: '/page/page1',
    sort: 1,
    title: '页面1'
  },
  {
    authType: 'menuAuth',
    id: '1400265859859210789',
    pid: '1400265859859210123',
    path: '/page/page2',
    sort: 1,
    title: '页面2'
  },
  {
    authType: 'menuAuth',
    id: '140026585985921785',
    pid: '1400265859859210789',
    path: '/page/page2/page3',
    sort: 1,
    title: '页面3'
  }
]

const formatMenuToRoute = (menus: any[], pid?: string) => {
  const loop = (pid?: string) => {
    const result: IRoute[] = []
    for (let i = 0; i < menus.length; i++) {
      const item = menus[i]
      if (item.pid != pid) {
        continue
      }
      const route: IRoute = {
        path: item.path,
        meta: {
          title: item.title,
          icon: item.icon
        }
      }
      route.children = loop(item.id)
      if (route.children.length === 0) {
        delete route.children
      }
      result.push(route)
    }
    return result
  }
  return loop(pid)
}

const AsyncRoutes = ({ init, children }: AsyncRoutesProps) => {
  if (!init) {
    const dispatch = useDispatch()

    setTimeout(() => {
      dispatch(setSideBarRoutes(formatMenuToRoute(SYS_ROUTES)))
    }, 1500)

    // return <Spin className="layout__loading" />
  }

  return <Transition>{children}</Transition>
}

export default memo(AsyncRoutes)
