/*
 * @Author: your name
 * @Date: 2020-05-29 17:33:08
 * @LastEditTime: 2020-05-29 18:04:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \js模块化f:\js\vue\mymall\vue.config.js
 */ 
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'common': '@/common',
        'views': '@/views',
        'network': '@/network',
      }
    }
  }
}