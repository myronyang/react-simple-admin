module.exports = {
  env: {
    browser: true,
    es2021: true,
    typescript: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      tsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  globals: {
    echarts: false,
    process: false
  },
  plugins: ['react'],
  rules: {
    // off=0, warn=1, error=2, 如果是数组, 第二项表示参数option
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // 强制不使用分号
    semi: ['error', 'never'],
    // 单引号
    quotes: [1, 'single'],
    indent: 0,
    'space-before-function-paren': 0,
    'no-tabs': 0,
    'eol-last': 0,
    'no-mixed-spaces-and-tabs': 0,
    // 不规则的空白不允许
    'no-irregular-whitespace': 0,
    // 禁止不必要的嵌套块
    'no-lone-blocks': 0,
    // 禁止给类赋值
    'no-class-assign': 2,
    // switch中的case标签不能重复
    'no-duplicate-case': 2,
    // 函数参数不能重复
    'no-dupe-args': 2,
    // 禁止无效的this，只能用在构造器，类，对象字面量
    'no-invalid-this': 0,
    // 函数调用时 函数名与()之间不能有空格
    'no-spaced-func': 2,
    // 注释风格不要有空格什么的
    'spaced-comment': ['error', 'always'],
    'react/display-name': 0
  },
  settings: {
    'import/resolver': {
      map: [
        ['/@', './src'],
      ],
      alias: {
        extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
      },
    },
  },
}
