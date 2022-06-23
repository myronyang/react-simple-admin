import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  Middleware,
  Reducer
} from 'redux'
import reduxThunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import { IStoreState, IAction } from './types'
import globalReducer from './modules/global'
import settingReducer from './modules/setting'

const reducers: Reducer<
  IStoreState,
  IAction<any>
> = combineReducers<IStoreState>({
  global: globalReducer,
  settings: settingReducer
})

const middleware: Middleware[] = [reduxThunk]

if (process.env.NODE_ENV === 'development') {
  middleware.push(reduxLogger)
}

function createMyStore() {
  const store = window.__REDUX_DEVTOOLS_EXTENSION__
    ? createStore(
        reducers,
        compose(
          applyMiddleware(...middleware),
          window.__REDUX_DEVTOOLS_EXTENSION__({})
        )
      )
    : createStore(reducers, applyMiddleware(...middleware))
  return store
}

const store = createMyStore()

export default store
