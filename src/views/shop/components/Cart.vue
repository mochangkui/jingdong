<template>
  <div class="mask" v-if="showMask" @click.self="closeCart">
    <div class="product">
      <div class="header">
        <span @click="clearCart">清空购物车</span>
        <span @click="toggleSelectAll">
          <i class="iconfont"
            v-html="isSelectAll ? '&#xe627;' : '&#xe628;'"
            :class="isSelectAll ? 'active' : ''"></i>全选
        </span>
      </div>
      <template v-if="total">
        <div class="item" v-for="item in productList" :key="item.id">
          <i class="iconfont checked-icon"
            :class="item.checked ? 'checked' : ''"
            v-html="item.checked ? '&#xe627;' : '&#xe628;'"
            @click="checkedProduct(item.id)"
          ></i>
          <img class="product-img" :src="item.imgUrl" :alt="item.name">
          <div class="product-desc">
            <p class="name">{{item.name}}</p>
            <p>
              <span class="price">&yen;{{item.price}}</span>
              <span class="old-price">&yen;{{item.oldPrice}}</span>
            </p>
          </div>
          <div class="product-number">
            <i class="iconfont reduce" @click="changeProductCount(item.id, item, -1, item.count)">&#xe61a;</i>
            <span>{{item.count}}</span>
            <i class="iconfont plus" @click="changeProductCount(item.id, item, +1)">&#xe692;</i>
          </div>
        </div>
      </template>
      <div class="empty" v-else>
        <i class="iconfont">&#xe621;</i>
      </div>
    </div>
  </div>
  <div class="cart">
    <div class="pay-content" @click="closeCart">
      <div class="icon">
        <img src="../images/basket.png" alt="">
        <div class="count">
          <span>{{total}}</span>
        </div>
      </div>
      <div class="desc">总计：<span>&yen;{{price}}</span></div>
    </div>
    <div class="pay-btn" v-if="total">
      <router-link :to="{ path: `/orderConfirmation/${shopId}` }">
        去结算
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  name: 'Cart',
  setup () {
    const showMask = ref(false)
    const route = useRoute()
    const store = useStore()
    const shopId = route.params.id
    const cartList = store.state.cartList
    // 计算商品总数
    const total = computed(() => {
      const productList = cartList[shopId]?.productList
      let count = 0
      if (productList) {
        for (const i in productList) {
          if (productList[i].checked) {
            count += productList[i].count
          }
        }
      }
      return count
    })
    // 计算商品总价格
    const price = computed(() => {
      const productList = cartList[shopId]?.productList
      let totalPrice = 0
      if (productList) {
        for (const i in productList) {
          if (productList[i].checked) {
            totalPrice += productList[i].count * productList[i].price
          }
        }
      }
      return totalPrice.toFixed(2)
    })
    // 判断是否已全选
    const isSelectAll = computed(() => {
      const productList = cartList[shopId].productList || {}
      let result = true
      if (!Object.keys(productList).length) {
        result = false
      }
      for (const i in productList) {
        if (!productList[i].checked) {
          result = false
        }
      }
      return result
    })
    // 获取商品列表
    const productList = computed(() => {
      const productList = cartList[shopId].productList || {}
      return productList
    })
    // 切换显示商品列表
    const closeCart = () => {
      showMask.value = !showMask.value
    }
    // 选择购买商品数量
    const changeProductCount = (productId, productInfo, num) => {
      const shopName = cartList[shopId].shopName
      store.commit('changeProductCount', { shopId, shopName, productId, productInfo, num })
    }
    // 勾选商品
    const checkedProduct = (productId) => {
      store.commit('checkedProduct', { shopId, productId })
    }
    // 清空购物车
    const clearCart = () => {
      store.commit('clearCart', { shopId })
    }
    // 全选/取消全选
    const toggleSelectAll = () => {
      store.commit('toggleSelectAll', { shopId, isSelectAll })
    }
    return {
      shopId,
      total,
      price,
      productList,
      showMask,
      closeCart,
      changeProductCount,
      checkedProduct,
      clearCart,
      isSelectAll,
      toggleSelectAll
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/mixins.scss';
  .mask {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 1;
    .product {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 49px;
      max-height: 400px;
      overflow-y: auto;
      background: #FFFFFF;
      .header {
        height: 50px;
        line-height: 50px;
        border-bottom: solid 1px #F1F1F1;
        padding: 0 18px;
        margin-bottom: 16px;
        .active {
          color: #0091FF;
        }
        span {
          font-size: 14px;
          color: #333333;
          .iconfont {
            font-size: 20px;
            vertical-align: middle;
            margin-right: 8px;
          }
        }
        span:first-child {
          float: left;
        }
        span:first-child {
          float: right;
        }
      }
      .item {
        position: relative;
        display: flex;
        margin-bottom: 12px;
        padding-bottom: 12px;
        padding: 0 18px;
        .checked-icon {
          font-size: 20px;
          margin: 29px 16px 0 0;
          &.checked {
            color: #0091FF;
          }
        }
        .product-img {
          width: 68px;
          height: 68px;
        }
        .product-desc {
          margin-left: 16px;
          overflow: hidden;
          .name {
            width: 100%;
            font-size: 14px;
            color: #333333;
            margin-bottom: 6px;
            line-height: 20px;
            @include ellipsis;
          }
          .price {
            font-size: 14px;
            color: #E93B3B;
            line-height: 20px;
          }
          .old-price {
            display: inline-block;
            margin-left: 6px;
            font-size: 20px;
            color: #999;
            text-decoration:line-through;
            transform: scale(0.5);
            vertical-align: middle;
          }
        }
        .product-number {
          position: absolute;
          right: 18px;
          bottom: 12px;
          .reduce {
            font-size: 20px;
          }
          span {
            font-size: 14px;
            color: #333333;
            margin: 0 10px;
          }
          .plus {
            font-size: 20px;
            color: #0091FF;
          }
        }
      }
      .empty {
        color: #0091FF;
        text-align: center;
        .iconfont {
          font-size: 40px;
        }
      }
    }
  }
  .cart {
    display: flex;
    box-shadow: 0 -1px 1px 0 #F1F1F1;
    position: absolute;
    height: 49px;
    line-height: 49px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: #FFFFFF;
    .pay-content {
      flex: 1;
      display: flex;
      .icon {
        position: relative;
        width: 76px;
        img {
          width: 28px;
          height: 26px;
          margin: 11px 0 0 24px;
        }
        .count {
          position: absolute;
          top: 7px;
          left: 47px;
          width: 15px;
          height: 15px;
          line-height: 15px;
          text-align: center;
          background: #E93B3B;
          color: #FFFFFF;
          border-radius: 50%;
          span {
            display: block;
            font-size: 16px;
            transform-origin: center center;
            transform: scale(0.5);
          }
        }
      }
      .desc {
        flex: 1;
        font-size: 12px;
        color: #333333;
        span {
          font-size: 18px;
          color: #E93B3B;
        }
      }
    }
    .pay-btn {
      width: 98px;
      background: #4FB0F9;
      font-size: 14px;
      text-align: center;
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
</style>
