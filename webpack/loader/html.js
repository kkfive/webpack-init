/**
 * @description: 处理HTML中引入的图片
 */
const html = {
  test: /\.html/,
  use: [
    {
      loader: 'html-withimg-loader'
    }
  ]
}
module.exports = html
