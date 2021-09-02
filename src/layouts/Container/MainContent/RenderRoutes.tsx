import React, { useMemo, memo } from 'react'
import Helmet from 'react-helmet'
import { Route } from 'react-router-dom'
import { businessRouteList } from '@/router/utils'
import { getPageTitle } from '@/router/utils'

import Authorized from './Authorized'
import AsyncRoutes from './AsyncRoutes'

import { IRoute } from '@/router/types'

const renderRoute = (route: IRoute) => {
  const { component: Component } = route
  const title = getPageTitle(businessRouteList)

  return (
    <Route
      key={route.path}
      exact={route.path !== '*'}
      path={route.path}
      render={(props) => (
        <Authorized {...props} route={route}>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={title} />
          </Helmet>
          <Component {...props} />
        </Authorized>
      )}
    />
  )
}

const renderRouteList = (): React.ReactNode[] => {
  const result: React.ReactNode[] = []
  businessRouteList.forEach((child: IRoute) => {
    result.push(renderRoute(child))
  })
  return result
}

const RenderRoutes = () => {
  const routeList = useMemo(() => renderRouteList(), [])
  return <AsyncRoutes>{routeList}</AsyncRoutes>
}

export default memo(RenderRoutes)
