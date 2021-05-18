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
const { getEntry, getHtmlWebpack } = require('./webpack/index')
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
    rules: [
      // js兼容
      {
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
                    targets: {
                      chrome: '60',
                      firefox: '60',
                      ie: '9',
                      safari: '10',
                      edge: '17'
                    }
                  }
                ]
              ]
            }
          }
        ]
      },
      // css解析
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      // styl解析
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 37.5 / 2,
              remPrecision: 8
            }
          },
          'postcss-loader',
          'stylus-loader'
        ]
      },
      // pug模板
      {
        test: /\.pug/,
        use: [
          'raw-loader',
          {
            loader: 'pug-html-loader',
            options: {
              // options to pass to the compiler same as: https://pugjs.org/api/reference.html
              data: {} // set of data to pass to the pug render.
            }
          }
        ]
      },
      // 图片
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 500,
          name: '/assets/image/[name]_[hash:8].[ext]'
        }
      },
      // 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          esModule: false,
          name: '/assets/font/[name]_[hash:8].[ext]'
        }
      }
    ]
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
  mode: 'development', // 开发模式
  // 开发服务器devServer 启动指令 webpack serve
  devServer: {
    // 构建后的路径
    contentBase: resolve(__dirname, 'dist'),
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 3000,
    // 自动打开浏览器
    open: true,
    // HMR
    hot: true
  }
}
getHtmlWebpack('./src/template/').forEach((item) => {
  webpackConfig.plugins.push(new HtmlWebpackPlugin(item))
})
module.exports = webpackConfig
