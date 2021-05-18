/**
 * @description: webpack配置需要的工具函数入口文件
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-05-18 22:53:02
 * @LastEditTime: 2021-05-18 22:53:02
 * @LastEditors: 小康
 */

// 获取入口文件
const getEntry = require('./getEntry')

// 获取Htmlwebapck配置
const getHtmlWebpack = require('./getHtmlPackConfig')

module.exports = { getEntry, getHtmlWebpack }
