<template>
  <Search class="search" />
  <ShopBaseInfo :data="shopInfo.data" class="shop-base-info" />
  <Content :shopName="shopInfo.data.name" />
  <Cart />
</template>

<script>
import { onMounted, reactive } from 'vue'
import { request } from '../../utils/request.js'
import ShopBaseInfo from '../../components/ShopBaseInfo.vue'
import Search from './components/Search.vue'
import Content from './components/Content.vue'
import Cart from './components/Cart.vue'

export default {
  name: 'Shop',
  components: {
    ShopBaseInfo,
    Search,
    Content,
    Cart
  },
  setup () {
    const shopInfo = reactive({ data: {} })
    // 请求商铺数据
    const getShopData = async () => {
      const result = await request({
        url: '/mock/shop.json',
        method: 'GET'
      })
      if (result?.data.status === 200 && result?.data?.data) {
        shopInfo.data = result.data.data
      }
    }
    onMounted(() => {
      getShopData()
    })
    return {
      shopInfo
    }
  }
}
</script>

<style lang="scss" scoped>
  .search, .shop-base-info {
    padding: 0 18px;
  }
</style>
