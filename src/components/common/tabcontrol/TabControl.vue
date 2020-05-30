<!--
 * @Author: your name
 * @Date: 2020-05-30 16:45:58
 * @LastEditTime: 2020-05-30 17:31:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \js模块化f:\js\vue\mymall\src\components\common\tabcontrol\TabControl.vue
--> 
<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" 
    :class="{active: index === currentIndex}"
    class="tab-control-item" :key="item"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
  }

  .tab-control-item {
    flex: 1;
  }
  
  .active {
    position: sticky;
    top: 44px;
  }

  .active span {
    padding: 5px;
    color: rgb(240, 123, 123);
    border-bottom: 2px solid rgb(240, 123, 123);
  }
</style>