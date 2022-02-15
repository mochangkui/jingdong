<template>
  <div class="shop-product">
    <div class="shop-name">{{shopInfo.shopName}}</div>
    <div class="product-list">
      <div class="product" v-for="item in shopInfo.productList" :key="item.id">
        <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
        <div class="desc">
          <p>{{item.name}}</p>
          <p>&yen;{{item.price}} x {{item.count}} <span>&yen;{{item.price * item.count}}</span></p>
        </div>
      </div>
    </div>
    <div class="total">
      <span>共计{{productTotal}}件/1.4kg</span>
      <i class="iconfont">&#xe677;</i>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'ShopProduct',
  props: {
    shopInfo: {
      type: Object,
      default: () => {}
    }
  },
  setup (props, context) {
    const productTotal = computed(() => {
      var count = 0
      for (const i in props.shopInfo.productList) {
        count += props.shopInfo.productList[i].count
      }
      return count
    })
    return {
      productTotal
    }
  }
}
</script>

<style lang="scss" scoped>
  .shop-product {
    margin: 0 18px;
    background: #fff;
    padding: 16px;
    box-sizing: border-box;
    border-radius: 4px;
    .shop-name {
      font-size: 16px;
      color: #333333;
      margin-bottom: 16px;
    }
    .product-list {
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
