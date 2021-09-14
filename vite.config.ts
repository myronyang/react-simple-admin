import { defineConfig } from 'vite'
import { createVitePlugins } from './build/vite/plugin'

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


export default defineConfig({
  base: base.cdn,
  plugins: createVitePlugins(),
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
      '@': path.resolve(__dirname, 'src'),
      '~b': path.resolve(__dirname, 'build'),
    }
  }
})
