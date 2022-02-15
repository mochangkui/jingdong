<template>
  <div class="order-item">
    <div class="shop-name">沃尔玛 <span>已取消</span></div>
    <div class="product">
      <div class="product-imgs">
        <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
        <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
        <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
        <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
      </div>
      <div class="desc">
        <p>&yen;36.88</p>
        <p>共2件</p>
      </div>
    </div>
  </div>
  <div class="order-item">
    <div class="shop-name">沃尔玛 <span>已取消</span></div>
    <div class="product">
      <div class="product-imgs">
        <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
        <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
        <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
        <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
      </div>
      <div class="desc">
        <p>&yen;36.88</p>
        <p>共2件</p>
      </div>
    </div>
  </div>
  <div class="order-item">
    <div class="shop-name">沃尔玛 <span>已取消</span></div>
    <div class="product">
      <div class="product-imgs">
        <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
        <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
        <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
        <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
      </div>
      <div class="desc">
        <p>&yen;36.88</p>
        <p>共2件</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderItem',
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .order-item {
    width: 339px;
    height: 110px;
    padding: 16px;
    box-sizing: border-box;
    margin: 0 auto 16px;
    background: #fff;
    border-radius: 4px;
    .shop-name {
      font-size: 16px;
      color: #333333;
      margin-bottom: 16px;
      span {
        float: right;
        font-size: 14px;
        color: #999999;
      }
    }
    .product {
      display: flex;
      margin-bottom: 16px;
      .product-imgs {
        flex: 1;
        img {
          width: 40px;
          height: 40px;
          margin-right: 12px;
        }
      }
      .desc {
        text-align: right;
        p:first-child {
          line-height: 20px;
          font-size: 14px;
          color: #E93B3B;
          margin-bottom: 4px;
        }
        p:last-child {
          line-height: 20px;
          font-size: 12px;
          color: #333333;
        }
      }
    }
  }
</style>
