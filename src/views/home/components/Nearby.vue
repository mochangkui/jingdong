<template>
  <div class="nearby">
    <h3 class="title">附近商铺</h3>
    <router-link :to="`/shop/${item.id}`" v-for="item in nearbyList" :key="item.id">
      <ShopBaseInfo :data="item" />
    </router-link>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import ShopBaseInfo from '../../../components/ShopBaseInfo.vue'
import { request } from '../../../utils/request.js'
export default {
  name: 'Nearby',
  components: {
    ShopBaseInfo
  },
  setup () {
    const nearbyList = reactive([])
    const imgUrl = require('../images/near.png')
    // 获取附近商铺列表
    const getNearbyList = async () => {
      const result = await request({
        url: '/mock/nearby.json',
        method: 'GET'
      })
      if (result?.data?.status === 200 && result?.data?.data?.length) {
        result.data.data.forEach(item => {
          item.imgUrl = imgUrl
        })
        nearbyList.push(...result.data.data)
      }
    }
    onMounted(() => {
      getNearbyList()
    })

    return {
      nearbyList
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/viriables.scss';
  .nearby {
    .title {
      margin: 16px 0 14px;
      color: $text-color;
      font-size: 18px;
    }
    a {
      text-decoration: none;
    }
  }
</style>
