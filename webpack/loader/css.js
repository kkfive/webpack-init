/**
 * @description: 处理css文件
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
