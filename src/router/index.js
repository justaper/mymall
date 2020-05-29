/*
 * @Author: your name
 * @Date: 2020-05-29 13:29:08
 * @LastEditTime: 2020-05-29 14:06:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \js模块化f:\js\vue\mymall\src\router\index.js
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
