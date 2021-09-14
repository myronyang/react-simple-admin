import reactRefresh from '@vitejs/plugin-react-refresh'

import { configVitePluginImp } from './demand'
import { configThemePlugin } from './theme'

export function createVitePlugins(viteEnv?: any, isBuild?: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [reactRefresh()]

  // vite-plugin-imp
  vitePlugins.push(configVitePluginImp(isBuild))

  //vite-plugin-theme
  vitePlugins.push(configThemePlugin(isBuild))

  return vitePlugins
}
