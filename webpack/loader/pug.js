/**
 * @description: 处理pug模板
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-05-22 22:47:59
 * @LastEditTime: 2021-05-22 22:47:59
 * @LastEditors: 小康
 */
const pug = {
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
}
module.exports = pug
