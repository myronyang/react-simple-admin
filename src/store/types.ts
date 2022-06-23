import { GlobalState } from './modules/global'
import { SettingState } from './modules/setting'

export interface IStoreState {
  global: GlobalState
  settings: SettingState
}

export interface IAction<T> {
  type: string
  payload: T
}
