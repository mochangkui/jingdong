<template>
  <div class="cart-item">
    <div class="shop-name">沃尔玛</div>
    <div class="product">
      <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
      <div class="desc">
        <p>番茄250g/份</p>
        <p>&yen;33.6 x 3 <span>&yen;99.9</span></p>
      </div>
    </div>
    <div class="product">
      <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
      <div class="desc">
        <p>番茄250g/份</p>
        <p>&yen;33.6 x 3 <span>&yen;99.9</span></p>
      </div>
    </div>
    <div class="total">
      <span>共计3件/1.4kg</span>
      <i class="iconfont">&#xe677;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .cart-item {
    width: 339px;
    height: 222px;
    padding: 16px;
    box-sizing: border-box;
    margin: 0 auto 16px;
    background: #fff;
    border-radius: 4px;
    .shop-name {
      font-size: 16px;
      color: #333333;
      margin-bottom: 16px;
    }
    .product {
      display: flex;
      margin-bottom: 16px;
      img {
        width: 46px;
        height: 46px;
        margin-right: 16px;
      }
      .desc {
        flex: 1;
        p {
          font-size: 14px;
          color: #333333;
          line-height: 20px;
        }
        p:first-child {
          margin-bottom: 6px;
        }
        p:last-child {
          color: #E93B3B;
          span {
            float: right;
            color: #000000;
          }
        }
      }
    }
    .total {
      height: 28px;
      line-height: 28px;
      text-align: center;
      background: #F5F5F5;
      font-size: 14px;
      color: #999999;
      .iconfont {
        vertical-align: middle;
        margin-left: 8px;
      }
    }
  }
</style>
