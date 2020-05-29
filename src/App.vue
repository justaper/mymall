<!--
 * @Author: your name
 * @Date: 2020-05-29 13:29:08
 * @LastEditTime: 2020-05-29 18:12:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \js模块化f:\js\vue\mymall\src\App.vue
--> 
<template>
  <div id="app">
    <router-view></router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
  import mainTabbar from 'components/content/mainTabbar/mainTabbar'

  export default {
    name: 'App',
    components: {
      mainTabbar
    }
  }
</script>

<style>
  @import './assets/css/base.css';
</style>
