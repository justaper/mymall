<!--
 * @Author: your name
 * @Date: 2020-05-26 16:00:50
 * @LastEditTime: 2020-05-27 14:56:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \js模块化f:\js\vue\tabbar\src\components\tabbar\TabBar.vue
--> 
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar'
  }
</script>

<style scoped>
   #tab-bar {
    display: flex;
    align-items: center;
    height: 49px;
    background-color: rgb(250, 250, 250);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(200, 200, 200, 0.2);
  }
</style>