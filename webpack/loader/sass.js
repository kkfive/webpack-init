/**
 * @description: 处理sass文件的loader
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-06-01 17:38:35
 * @LastEditTime: 2021-06-01 17:38:35
 * @LastEditors: 小康
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { px2remLoaderOptions } = require('../config')
const sass = {
  test: /\.scss$/,
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
    'sass-loader'
  ]
}
module.exports = sass
