<template>
  <div class="content">
    <ul class="category">
      <li class="item"
        v-for="(item, index) in categoryList"
        :key="item.id"
        :class="currentTabIndex == index ? 'active' : ''"
        @click="handleChangeTab(index)"
      >{{item.name}}</li>
    </ul>
    <div class="product">
      <div class="item" v-for="item in productList" :key="item.id">
        <img class="product-img" :src="item.imgUrl" :alt="item.name">
        <div class="product-desc">
          <p class="name">{{item.name}}</p>
          <p class="sales">月售{{item.sales}}</p>
          <p>
            <span class="price">
              &yen;{{item.price}}
            </span>
            <span class="old-price">
              &yen;{{item.oldPrice}}
            </span>
          </p>
        </div>
        <div class="product-number">
          <i class="iconfont reduce" @click="changeProductCount(shopName, item.id, item, -1)">&#xe61a;</i>
          <span>{{cartList[shopId]?.productList?.[item.id]?.count || 0}}</span>
          <i class="iconfont plus" @click="changeProductCount(shopName, item.id, item, +1)">&#xe692;</i>
        </div>
      </div>
    </div>
  </div>
  <Toast v-if="showToast" :message="message" />
</template>

<script>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { request } from '../../../utils/request.js'
import Toast from '../../../components/Toast.vue'

export default {
  name: 'Content',
  props: {
    shopName: {
      type: String,
      default: () => ''
    }
  },
  components: {
    Toast
  },
  setup () {
    const route = useRoute()
    const store = useStore()
    const currentTabIndex = ref(0)
    const message = ref('')
    const showToast = ref(false)
    const productList = reactive([])
    const categoryList = [
      { id: 1, name: '全部商品', tag: 'all' },
      { id: 2, name: '秒杀', tag: 'seckill' },
      { id: 3, name: '水果', tag: 'fruit' },
      { id: 4, name: '食品', tag: 'food' }
    ]
    // 获取url参数
    const shopId = route.params.id
    // 获取state数据
    const { cartList } = toRefs(store.state)
    // 请求商品数据
    const getProductData = (tag) => {
      request({
        url: `/mock/shop-${tag}.json`,
        method: 'GET'
      }).then((res) => {
        productList.length > 0 && productList.splice(0, productList.length)
        res.data.data.forEach((item) => {
          switch (item.id) {
            case '1':
              item.imgUrl = require('../images/tomato.png')
              break
            case '2':
              item.imgUrl = require('../images/cherry.png')
              break
            case '3':
              item.imgUrl = require('../images/orange.png')
              break
            case '4':
              item.imgUrl = require('../images/crab.png')
              break
          }
        })
        productList.push(...res.data.data)
      }).catch(() => {
        showToast.value = true
        message.value = '加载失败'
        setTimeout(() => {
          showToast.value = false
        }, 800)
      })
    }

    // 选择购买商品数量
    const changeProductCount = (shopName, productId, productInfo, num) => {
      store.commit('changeProductCount', { shopId, shopName, productId, productInfo, num })
    }

    // 切换商品分类
    const handleChangeTab = (index) => {
      currentTabIndex.value = index
      getProductData(categoryList[index].tag)
    }

    onMounted(() => {
      getProductData('all')
    })

    return {
      currentTabIndex,
      categoryList,
      handleChangeTab,
      message,
      showToast,
      productList,
      changeProductCount,
      cartList,
      shopId
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/mixins.scss';
  .content {
    display: flex;
    position: absolute;
    top: 155px;
    left: 0;
    right: 0;
    bottom: 49px;
    .category {
      height: 100%;
      width: 76px;
      background: #F5F5F5;
      overflow-y: auto;
      .item {
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        color: #333;
        &.active {
          background: #fff;
        }
      }
    }
    .product {
      flex: 1;
      height: 100%;
      overflow-y: auto;
      .item {
        position: relative;
        display: flex;
        margin: 0 18px 12px 16px;
        padding-bottom: 12px;
        border-bottom: solid 1px #F1F1F1;
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
          .sales {
            font-size: 12px;
            color: #333333;
            margin-bottom: 6px;
            line-height: 16px;
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
          right: 0;
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
    }
  }
</style>
