<template>
  <div class="title">我的全部购物车</div>
  <div class="cart-list">
    <CartItem />
    <CartItem />
    <CartItem />
  </div>
  <Footer />
</template>

<script>
import CartItem from './components/CartItem.vue'
import Footer from '../../components/Footer.vue'
export default {
  name: 'CartList',
  components: {
    CartItem,
    Footer
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
  .cart-list {
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
