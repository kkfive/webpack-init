/**
 * @description: js文件处理loader
 */
const { babelLoaderOptions } = require('../config')
const javascript = {
  test: /\.js$/,
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
    }
  ]
}

module.exports = javascript
