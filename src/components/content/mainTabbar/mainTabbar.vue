<!--
 * @Author: your name
 * @Date: 2020-05-29 17:55:42
 * @LastEditTime: 2020-05-29 18:06:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \js模块化f:\js\vue\mymall\src\components\content\mainTabbar\mainTabbar.vue
--> 
<template>
  <div>
    <tab-bar>
      <tab-bar-item link="/home" activeColor="rgba(255, 120, 120, 0.8)">
        <img src="~assets/img/tabbar/icon.png" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/icon_act.png" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category" activeColor="rgba(255, 120, 120, 0.8)">
        <img src="~assets/img/tabbar/icon.png" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/icon_act.png" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart" activeColor="rgba(255, 120, 120, 0.8)">
        <img src="~assets/img/tabbar/icon.png" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/icon_act.png" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile" activeColor="rgba(255, 120, 120, 0.8)">
        <img src="~assets/img/tabbar/icon.png" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/icon_act.png" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: 'mainTabbar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>