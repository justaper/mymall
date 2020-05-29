<!--
 * @Author: your name
 * @Date: 2020-05-27 14:28:17
 * @LastEditTime: 2020-05-29 19:57:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \js模块化f:\js\vue\tabbar\src\views\home\Home.vue
--> 
<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">Home</div>
    </nav-bar>
    <home-swiper :banner="banners"></home-swiper>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import HomeSwiper from './childComponents/HomeSwiper'

  import {getHomeMultidata} from 'network/home';

  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommends: [],
      }
    },
    components: {
      NavBar,
      HomeSwiper
    },
    created() {
      // 发送请求
      getHomeMultidata()
      .then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>

</style>