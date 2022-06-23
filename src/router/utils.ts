import routes from './index'
import { IRoute } from './types'

// 路由转换为一维数组
export function flattenRoute(
  routes: IRoute[],
  deep: boolean,
  auth: boolean
): IRoute[] {
  const result: IRoute[] = []
  for (let i = 0; i < routes.length; i += 1) {
    const route = routes[i]
    result.push({
      ...route,
      auth: typeof route.auth !== 'undefined' ? route.auth : auth
    })
    if (route.children && deep) {
      result.push(...flattenRoute(route.children, deep, auth))
    }
  }
  return result
}

// 最外层一级路由
export const layoutRouteList = ((): IRoute[] => {
  return flattenRoute(routes, false, false)
})()

// 系统路由
export const systemRouteList = ((): IRoute[] => {
  const routeList = routes.filter((route) => route.path === '/system')

  if (routeList.length > 0) {
    return flattenRoute(routeList, true, false)
  }
  return []
})()

// 业务路由
export const businessRouteList = ((): IRoute[] => {
  const routeList = routes.filter((route) => route.path === '/')
  if (routeList.length > 0) {
    return flattenRoute(routeList, true, true)
  }
  return []
})()

// 获取当前路由名称
export const getPageTitle = (routeList: IRoute[]): string => {
  const route = routeList.find(
    (child) => child.path === window.location.pathname
  )
  return route ? route.meta.title : ''
}
