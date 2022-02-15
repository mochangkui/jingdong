<template>
  <Header @dispatchEmit="saveAddress">
    <span>新建收货地址</span>
    <template v-slot:right>保存</template>
  </Header>
  <AddAressInfo />
</template>

<script>
import { useRouter } from 'vue-router'
import Header from '../../components/Header.vue'
import AddAressInfo from './components/AddressInfo.vue'
export default {
  name: 'AddAddress',
  components: {
    Header,
    AddAressInfo
  },
  setup () {
    const router = useRouter()
    const saveAddress = () => {
      router.push({ name: 'MyAddressList' })
    }
    return {
      saveAddress
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
