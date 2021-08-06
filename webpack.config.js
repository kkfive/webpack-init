/**
 * @description: webpack配置文件
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptiomizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const envMode = process.env.envMode
require('dotenv').config({ path: `.env.${envMode}` })
// 正则匹配以 GLOBAL_ 开头的 变量
const prefixRE = /^GLOBAL_/
let env = {}
Object.keys(process.env).forEach((key) => {
  if (key === 'NODE_ENV' || key === 'BASE_URL' || prefixRE.test(key)) {
    env[key] = JSON.stringify(process.env[key])
  }
})

const { getEntry, getHtmlWebpack, loaderList, devServer } = require('./webpack/index')
const webpack = require('webpack')
const webpackConfig = {
  // 入口
  entry: getEntry(resolve(__dirname, './src/views')),
  // 输出
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].[chunkhash:8].js',
    clean: true
  },
  // loader配置
  module: {
    rules: loaderList
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    // 压缩CSS
    new OptiomizeCssAssetsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css' //对输出的文件进行重命名,默认为main.css
    }),
    new webpack.DefinePlugin({
      'process.env': {
        ...env
      }
    })
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
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // 多进程
        parallel: true,
        //删除注释
        extractComments: process.env.GLOBAL_SHOWCONSOLE === 'false' ? true : false,
        terserOptions: {
          compress: {
            // 生产环境去除console
            drop_console: process.env.GLOBAL_SHOWCONSOLE === 'false' ? true : false,
            drop_debugger: process.env.GLOBAL_SHOWCONSOLE === 'false' ? true : false
          }
        }
      })
    ]
  },
  // 模式 development 或 production
  mode: process.env.NODE_ENV, // 开发模式
  // 开发服务器devServer 启动指令 webpack serve
  devServer
}
if (process.env.NODE_ENV !== 'production') {
  webpackConfig.devtool = 'eval-source-map'
}
getHtmlWebpack().forEach((item) => {
  webpackConfig.plugins.push(new HtmlWebpackPlugin(item))
})
module.exports = webpackConfig
