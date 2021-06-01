/**
 * @description: 处理less文件的loader
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-06-01 17:29:35
 * @LastEditTime: 2021-06-01 17:29:35
 * @LastEditors: 小康
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { px2remLoaderOptions } = require('../config')
const less = {
  test: /\.less$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '/'
      }
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 3
      }
    },
    {
      loader: 'px2rem-loader',
      options: px2remLoaderOptions
    },
    'postcss-loader',
    'less-loader'
  ]
}
module.exports = less
