import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'
import {
  viteThemePlugin,
  antdDarkThemePlugin,
  mixLighten,
  mixDarken,
  tinycolor
} from 'vite-plugin-theme'

import { getThemeColors, generateColors } from './build/conifg/themeConfig'
import { generateModifyVars } from './build/generate/generateModifyVars'

import path from 'path'
import fs from 'fs'
import lessToJS from 'less-vars-to-js'
import config from './src/config/env'

const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './src/assets/styles/variables.less'),
    'utf8'
  )
)

const env = process.argv[process.argv.length - 1]
const base = config[env]

const colors = generateColors({
  mixDarken,
  mixLighten,
  tinycolor
})

console.log('--------------------');
console.log(...getThemeColors(), ...colors);


// https://vitejs.dev/config/
export default defineConfig({
  base: base.cdn,
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/lib/${name}/style/index.less`
        }
      ]
    }),
    viteThemePlugin({
      resolveSelector: (s: string) => {
        s = s.trim()
        switch (s) {
          case '.ant-btn':
            return '.ant-steps-item-icon > .ant-steps-icon'
          case '.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)':
          case '.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover':
          case '.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active':
            return s
          case '.ant-steps-item-icon > .ant-steps-icon':
            return s
          case '.ant-select-item-option-selected:not(.ant-select-item-option-disabled)':
            return s
          default:
            if (s.indexOf('.ant-btn') >= -1) {
              // 按钮被重新定制过，需要过滤掉class防止覆盖
              return s
            }
        }
        return s.startsWith('[data-theme') ? s : `[data-theme] ${s}`
      },
      colorVariables: [...getThemeColors(), ...colors]
    }),
    // antdDarkThemePlugin({
    //   preloadFiles: [
    //     path.resolve(process.cwd(), 'node_modules/ant-d/dist/antd.less'),
    //     //path.resolve(process.cwd(), 'node_modules/ant-design-vue/dist/antd.dark.less'),
    //     path.resolve(process.cwd(), 'src/design/index.less'),
    //   ],
    //   filter: (id) => (!id.endsWith('antd.less')),
    //   // extractCss: false,
    //   darkModifyVars: {
    //     ...generateModifyVars(true),
    //     'text-color': '#c9d1d9',
    //     'primary-1': 'rgb(255 255 255 / 8%)',
    //     'text-color-base': '#c9d1d9',
    //     'component-background': '#151515',
    //     'heading-color': 'rgb(255 255 255 / 65%)',
    //     // black: '#0e1117',
    //     // #8b949e
    //     'text-color-secondary': '#8b949e',
    //     'border-color-base': '#303030',
    //     // 'border-color-split': '#30363d',
    //     'item-active-bg': '#111b26',
    //     'app-content-background': '#1e1e1e',
    //     'tree-node-selected-bg': '#11263c',

    //     'alert-success-border-color': '#274916',
    //     'alert-success-bg-color': '#162312',
    //     'alert-success-icon-color': '#49aa19',
    //     'alert-info-border-color': '#153450',
    //     'alert-info-bg-color': '#111b26',
    //     'alert-info-icon-color': '#177ddc',
    //     'alert-warning-border-color': '#594214',
    //     'alert-warning-bg-color': '#2b2111',
    //     'alert-warning-icon-color': '#d89614',
    //     'alert-error-border-color': '#58181c',
    //     'alert-error-bg-color': '#2a1215',
    //     'alert-error-icon-color': '#a61d24',
    //   },
    // }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: themeVariables
      }
    }
  },
  // server: {
  //   port: 3001,
  //   proxy: {
  //     '/api': {
  //       target: 'http://47.99.134.126:28019/api/v1',
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
