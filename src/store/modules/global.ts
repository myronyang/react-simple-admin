import { Reducer } from 'redux'
import { IAction } from '../types'
import { IRoute } from '@/router/types'
import { flattenRoute } from '@/router/utils'

export interface GlobalState {
  sidebar: {
    opened: boolean
  }
  routes: IRoute[]
  flattenRoutes: IRoute[]
  init: boolean
}

const defaultValues: GlobalState = {
  sidebar: {
    opened: true
  },
  routes: [],
  flattenRoutes: [],
  init: false
}

const SET_SIDE_BAR_ROUTES = 'SET_SIDE_BAR_ROUTES'

export const setSideBarRoutes = (routes: IRoute[]) => ({
  type: SET_SIDE_BAR_ROUTES,
  payload: routes
})

const globalReducer: Reducer<GlobalState, IAction<any>> = (
  state = defaultValues,
  { type, payload }: IAction<any>
) => {
  switch (type) {
    case SET_SIDE_BAR_ROUTES:
      return {
        ...state,
        routes: payload,
        flattenRoutes: flattenRoute(payload, true, false),
        init: true
      }
    default:
      return { ...state }
  }
}

export default globalReducer
