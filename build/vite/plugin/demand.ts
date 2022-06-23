import type { Plugin } from 'vite'
import vitePluginImp from 'vite-plugin-imp'

export function configVitePluginImp(isBuild: boolean): Plugin[] {
  const plugin = [
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => {
            if (['row', 'col'].includes(name)) return false
            return `antd/lib/${name}/style/index.less`
          }
        }
      ]
    })
  ]

  return plugin as unknown as Plugin[]
}
