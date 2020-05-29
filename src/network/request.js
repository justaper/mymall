/*
 * @Author: your name
 * @Date: 2020-05-29 12:22:12
 * @LastEditTime: 2020-05-29 19:38:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * 
 */ 
import axios from 'axios'

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // axios拦截器
  // 请求拦截器
  instance.interceptors.request.use(config => {
  // Do something before request is sent
  // 1、更改header

  // 2、调用网络请求过度动画

  // 3、某些请求必须携带特殊信息，比如登陆需要token
  return config;
  },error => {
  // Do something with request error
  return Promise.reject(error);
  });

  // 响应拦截器
  instance.interceptors.response.use(response => {
  // Do something before response is sent
  return response.data;
  },error => {
  // Do something with response error
  return Promise.reject(error);
  });

  // 发送请求  返回Promise对象
  return instance(config);

  
}

