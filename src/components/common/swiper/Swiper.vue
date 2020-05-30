<!--
 * @Author: your name
 * @Date: 2020-05-29 20:53:04
 * @LastEditTime: 2020-05-30 09:31:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \js模块化f:\js\vue\mymall\src\components\common\swiper\swiper.vue
--> 
<template>
  <div id="hy-swiper">
    <div class="swiper">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator">
        <div class="indi-item"></div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Swiper',
    props: {
      interval: {         //图片切换时间
        type: Number,
        default: 3000
      },
      animDuration: {
        type: Number,
        default: 300
      },
      moveRation: {       //回弹比例
        type: Number,
        default: 0.33
      },
      showIndicator: {    //是否显示指示符
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        slideCount: 0,  // 
      }
    }
  }
</script>

<style lang="less" scoped>
  #hy-swiper {
    overflow: hidden;
    position: relative;

    .swiper {
      display: flex;
    }

    .indicator {
      display: flex;
      justify-content: center;
      position: absolute;
      width: 100%;
      bottom: 8px;

      .indi-item {
        box-sizing: border-box;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #fff;
        line-height: 8px;
        text-align: center;
        font-size: 12px;
        margin: 0 5px;
      }

      .indi-item.active {
        background-color: rgba(27, 104, 219, 0.8);
      }
    }
  }
  
  
</style>