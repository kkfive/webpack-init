/**
 * @description: 处理ejs模板
 */
const ejs = {
  test: /\.ejs/,
  use: [
    {
      loader: 'ejs-compiled-loader',
      options: {
        htmlmin: true,
        htmlminOptions: {
          removeComments: true,
          minifyCSS: true,
          minifyJS: true
        }
      }
    }
  ]
}
module.exports = ejs
