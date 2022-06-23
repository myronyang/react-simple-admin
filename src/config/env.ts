export default {
  develop: {
    cdnUrl: './',
    apiBaseUrl: '' // 开发环境接口请求，后用于 proxy 代理配置
  },
  beta: {
    cdnUrl: '', // 测试环境 cdn 路径
    apiBaseUrl: '' // 测试环境接口地址
  },
  product: {
    cdnUrl: '', // 正式环境 cdn 路径
    apiBaseUrl: '' // 正式环境接口地址
  }
}