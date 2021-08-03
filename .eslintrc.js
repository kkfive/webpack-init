module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [],
  rules: {
    'no-console': 0,
    'no-unresolved': 0
  },
  settings: {}
}
