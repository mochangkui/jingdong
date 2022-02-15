<template>
  <div class="order-comfirmation">
    <div class="header-bg"></div>
    <Header @dispatchEmit="toShopPage" class="header">
      <template v-slot:default>确认订单</template>
    </Header>
    <ReceivingInfo />
    <ShopProduct :shopInfo="shopInfo.data" />
    <SubmitOrder />
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import Header from '../../components/Header.vue'
import ReceivingInfo from './components/ReceivingInfo.vue'
import ShopProduct from './components/ShopProduct.vue'
import SubmitOrder from './components/SubmitOrder.vue'
export default {
  name: 'OrderConfirmation',
  components: {
    Header,
    ReceivingInfo,
    ShopProduct,
    SubmitOrder
  },
  setup () {
    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    const shopId = route.params.id
    const cartList = store.state.cartList
    const shopInfo = reactive({ data: {} })
    const toShopPage = () => {
      router.push({ name: 'Shop' })
    }
    onMounted(() => {
      shopInfo.data = cartList[shopId]
    })
    return {
      toShopPage,
      shopInfo
    }
  }
}
</script>

<style lang="scss" scoped>
  .order-comfirmation {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 50px;
    background: #f5f5f5;
    .header-bg {
      height: 140px;
      background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
    }
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: none;
      color: #fff;
    }
  }
</style>
