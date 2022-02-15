<template>
  <div class="title">我的订单</div>
  <div class="order-list">
    <OrderItem />
  </div>
  <Footer />
</template>

<script>
import Footer from '../../components/Footer.vue'
import OrderItem from './components/OrderItem.vue'
export default {
  name: 'OrderList',
  components: {
    Footer,
    OrderItem
  },
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 16px;
    color: #333;
    background: #fff;
  }
  .order-list {
    position: absolute;
    left: 0;
    top: 44px;
    bottom: 50px;
    right: 0;
    background: #F5F5F5;
    overflow: auto;
    padding: 16px 0 0;
  }
</style>
