/**
 * @description: 处理图片
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-05-22 22:48:38
 * @LastEditTime: 2021-05-22 22:48:38
 * @LastEditors: 小康
 */

const image = {
  test: /\.(png|svg|jpe?g|gif)$/i,
  loader: 'url-loader',
  options: {
    esModule: false,
    limit: 1536,
    name: 'assets/image/[name]_[hash:8].[ext]'
  }
}

module.exports = image
