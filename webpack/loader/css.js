/**
 * @description: 处理css文件
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-05-22 22:45:50
 * @LastEditTime: 2021-05-22 22:45:50
 * @LastEditors: 小康
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { px2remLoaderOptions } = require('../config')
const css = {
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '/'
      }
    },
    'css-loader',
    {
      loader: 'px2rem-loader',
      options: px2remLoaderOptions
    },
    'postcss-loader'
  ]
}

module.exports = css
