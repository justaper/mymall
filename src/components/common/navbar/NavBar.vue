<!--
 * @Author: your name
 * @Date: 2020-05-29 18:26:00
 * @LastEditTime: 2020-05-29 18:36:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \js模块化f:\js\vue\mymall\src\components\common\navbar\NavBar.vue
--> 
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(250, 240, 240, 0.8);
  }

  .left, .right {
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>