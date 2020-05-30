<!--
 * @Author: your name
 * @Date: 2020-05-27 14:28:17
 * @LastEditTime: 2020-05-30 19:05:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \js模块化f:\js\vue\tabbar\src\views\home\Home.vue
--> 
<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">Home</div>
    </nav-bar>
    <!-- <home-swiper :banner="banners"></home-swiper> -->
    <recommend-view :recommends='recommends'></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']"></tab-control>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import TabControl from 'components/common/tabcontrol/TabControl'
  
  // import HomeSwiper from './childComponents/HomeSwiper'
  import RecommendView from './childComponents/RecommendView'
  import FeatureView from './childComponents/FeatureView';
  
  import {getHomeMultidata} from 'network/home';

  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
        'pop': {page: 0, list: []},
        'news': {page: 0, list: []},
        'sell': {page: 0, list: []}
        }
      }
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata()
          .then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      }
    },
    components: {
      NavBar,
      TabControl,
      // HomeSwiper,
      RecommendView,
      FeatureView
    },
    created() {
      // 发送请求
      this.getHomeMultidata()
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }

  .home-nav-bar {
    background-color:rgb(235, 84, 134);
    color: #fff;

    /* 固定定位  固定顶部导航栏 */
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>