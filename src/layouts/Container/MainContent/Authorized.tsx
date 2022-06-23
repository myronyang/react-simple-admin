import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { businessRouteList } from '@/router/utils'

import { IRoute } from '@/router/types'
import { IStoreState } from '@/store/types'

interface AuthProps extends RouteComponentProps {
  route: IRoute
  children: React.ReactNode
}

const checkAuth = (location: RouteComponentProps['location']): boolean => {
  const route = businessRouteList.find(
    (child) => child.path === location.pathname
  )

  if (!route) {
    return true
  }
  if (route.redirect) {
    return true
  }
  if (route.auth === false) {
    return true
  }
  const { flattenRoutes } = useSelector((state: IStoreState) => state.global)
  if (flattenRoutes.length > 0) {
    if (!flattenRoutes.find((child) => child.path === location.pathname)) {
      return false
    }
  }

  return true
}

const Authorized = (props: AuthProps) => {
  if (false) {
    return (
      <Redirect
        to={`/system/login?redirectURL=${encodeURIComponent(
          window.location.origin +
            props.location.pathname +
            props.location.search
        )}`}
      />
    )
  }

  if (!checkAuth(props.location)) {
    return <Redirect to="/error/403" push />
  }

  if (props.route.redirect) {
    return <Redirect to={props.route.redirect!} push />
  }

  return <>{props.children}</>
}

export default memo(Authorized)
