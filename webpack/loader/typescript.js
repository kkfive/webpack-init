/**
 * 处理typescript类型文件
 */
const { babelLoaderOptions } = require('../config')
const typescript = {
  test: /\.ts$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env',
            {
              useBuiltIns: 'usage',
              corejs: {
                //core-js的版本
                version: 3
              },
              //需要兼容的浏览器
              targets: babelLoaderOptions
            }
          ]
        ]
      }
    },
    'ts-loader'
  ]
}
module.exports = typescript
