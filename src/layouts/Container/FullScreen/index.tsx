import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { systemRouteList } from '@/router/utils'
import { IRoute } from '@/router/types'
import { Spin } from 'antd'

const FullLayout = () => {
  return (
    <div className="layout-container">
      <Suspense fallback={<Spin className="layout__loading" />}>
        <Switch>
          {systemRouteList.map((menu: IRoute) => (
            <Route
              exact
              key={menu.path}
              path={menu.path}
              component={menu.component}
            ></Route>
          ))}
        </Switch>
      </Suspense>
    </div>
  )
}

export default FullLayout
