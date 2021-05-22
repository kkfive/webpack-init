/**
 * @description: 处理stylus文件的loader
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-05-22 22:38:35
 * @LastEditTime: 2021-05-22 22:38:35
 * @LastEditors: 小康
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { px2remLoaderOptions } = require('../config')
const stylus = {
  test: /\.styl$/,
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
    'stylus-loader'
  ]
}
module.exports = stylus
