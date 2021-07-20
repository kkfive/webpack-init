/**
 * @description: webpack配置文件
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
const webpack = require('webpack')
const config = require('./config')
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
  resolve: {
    alias: {
      '@src': resolve('src'),
      '@font': resolve('src/font'),
      '@js': resolve('src/js'),
      '@style': resolve('src/style'),
      '@image': resolve('src/image')
    }
  },
  plugins: [
    // 压缩CSS
    new OptiomizeCssAssetsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css' //对输出的文件进行重命名,默认为main.css
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({ G_CONFIG: JSON.stringify(config) })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', //块的范围，有三个可选值：initial/async动态异步加载/all全部块(推荐)，默认为async;
      cacheGroups: {
        // commons: {
        //   name: 'style' ,  // 提取出来的文件命名
        //   // name： ‘common/common’ //  即先生成common文件夹
        //   chunks: 'initial',   // initial表示提取入口文件的公共css及js部分
        //   // chunks: 'all' // 提取所有文件的公共部分
        //   test: '/\.(scss|css|styl|stylus|less|sass)/',  // 只提取公共css ，命名可改styles
        //   minChunks:2, // 表示提取公共部分最少的文件数
        //   minSize: 0,  // 表示提取公共部分最小的大小
        //   // 如果发现页面中未引用公共文件，加上enforce: true
        //   enforce: true,
        //   priority: 20
        // },
        // 公共代码部分
        common: {
          name: 'common',
          test: /[\\/]src[\\/]/,
          minSize: 0,
          minChunks: 2,
          chunks: 'all',
          priority: 5
        },
        // // 处理入口chunk,同步的
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'vendors',
          priority: 10
        },
        // 处理异步chunk
        'async-vendors': {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          chunks: 'async',
          name: 'async-vendors',
          priority: 10
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
