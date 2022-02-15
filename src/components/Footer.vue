<template>
  <div class="docker">
    <div
      class="item"
      v-for="(item, index) in dockerList"
      :key="item.id"
      @click="handleChangePage(index)"
    >
      <router-link :to="item.to">
        <i class="iconfont" v-html="item.icon"></i>
        <p>{{item.name}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Footer',
  setup () {
    // 底部docker数据
    const dockerList = [{
      id: 1,
      icon: '&#xe606;',
      name: '首页',
      to: { name: 'Home' }
    }, {
      id: 2,
      icon: '&#xe8bb;',
      name: '购物车',
      to: { name: 'CartList' }
    }, {
      id: 3,
      icon: '&#xe6af;',
      name: '订单',
      to: { name: 'OrderList' }
    }, {
      id: 4,
      icon: '&#xe619;',
      name: '我的',
      to: { name: 'PersonalInfo' }
    }]
    // 当前页面索引
    const currentIndex = ref(0)

    // 修改当前页面索引
    function handleChangePage (index) {
      currentIndex.value = index
    }
    return {
      dockerList,
      currentIndex,
      handleChangePage
    }
  }
}
</script>

<style lang="scss" scoped>
  .docker {
    display: flex;
    padding: 0 18px;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 49px;
    border-top: solid 1px #f1f1f1;
    .item {
      flex: 1;
      font-size: 10px;
      text-align: center;
      a {
        outline: none;
        text-decoration: none;
        .iconfont {
          display: inline-block;
          font-size: 20px;
          margin: 7px 0 2px 0;
          color: #000;
        }
        p {
          color: #333;
        }
        &.router-link-exact-active {
          .iconfont, p {
            color: #1FA4FC !important;
          }
        }
      }
    }
  }
</style>
