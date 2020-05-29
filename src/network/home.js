/*
 * @Author: your name
 * @Date: 2020-05-29 18:45:30
 * @LastEditTime: 2020-05-29 19:28:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \js模块化f:\js\vue\mymall\src\network\home.js
 */ 
import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata',
  })
}