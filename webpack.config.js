/**
 * @description: webpack配置文件
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-05-18 09:39:58
 * @LastEditTime: 2021-05-18 09:39:58
 * @LastEditors: 小康
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptiomizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const {
  getEntry,
  getHtmlWebpack,
  loaderList,
  devServer
} = require('./webpack/index')

const webpackConfig = {
  // 入口
  entry: getEntry('./src/js'),
  // 输出
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].[chunkhash:8].js'
  },
  // loader配置
  module: {
    rules: loaderList
  },
  plugins: [
    // 压缩CSS
    new OptiomizeCssAssetsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css' //对输出的文件进行重命名,默认为main.css
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', //块的范围，有三个可选值：initial/async动态异步加载/all全部块(推荐)，默认为async;
      cacheGroups: {
        // 处理入口chunk,同步的
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'vendors'
        },
        // 处理异步chunk
        'async-vendors': {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          chunks: 'async',
          name: 'async-vendors'
        }
      }
    }
  },
  // 模式 development 或 production
  mode: process.env.NODE_ENV, // 开发模式
  // 开发服务器devServer 启动指令 webpack serve
  devServer
}
getHtmlWebpack('./src/template/').forEach((item) => {
  webpackConfig.plugins.push(new HtmlWebpackPlugin(item))
})
module.exports = webpackConfig
