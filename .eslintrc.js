module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 0,
    'no-unresolved': 0
  },
  settings: {
    // 解决路径引用ts文件报错的问题
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'scss']
      },
      // 解决tsconfig下的path别名导致eslint插件无法解决的bug
      typescript: {
        alwaysTryTypes: true
      }
    },
    'import/extensions': [
      'error',
      {
        ts: 'never'
      }
    ]
  }
}
