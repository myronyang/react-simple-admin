import { Reducer } from 'redux'
import { IAction } from '../types'
import DefaultConfig, { Config } from '@/config'
import { setStore, getStore } from '@/assets/scripts/utils'

export interface SettingState {
  fixedHeader?: boolean
  layout?: Config['layout']
  theme?: MenuTheme
  contentWidth?: Config['contentWidth']
  collapsed?: boolean
}

type MenuTheme = 'dark' | 'light'

const SETTINGS_KEY = 'REACT-SIMPLE-SETTINGS'

const defaultValues: SettingState = {
  fixedHeader: DefaultConfig.fixedHeader,
  layout: DefaultConfig.layout,
  theme: DefaultConfig.theme,
  contentWidth: DefaultConfig.contentWidth,
  collapsed: DefaultConfig.collapsed
}

const UPDATE_SETTINSG = 'UPDATE_SETTINSG'

export const updateLayoutSettings: (
  settings: SettingState
) => IAction<SettingState> = (settings: SettingState) => ({
  type: UPDATE_SETTINSG,
  payload: settings
})

const settingsReducer: Reducer<SettingState, IAction<any>> = (
  state = defaultValues,
  { type, payload }: IAction<any>
) => {
  switch (type) {
    case UPDATE_SETTINSG:
      setStore(SETTINGS_KEY, payload)
      return {
        ...state,
        ...payload
      }
    default:
      return {
        ...state
      }
  }
}

export default settingsReducer
