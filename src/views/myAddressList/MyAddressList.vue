<template>
  <Header @dispatchEmit="toAddAddressPage">
    <template v-slot:default>管理收货地址</template>
    <template v-slot:right>新增</template>
  </Header>
  <AddressList />
</template>

<script>
import { useRouter } from 'vue-router'
import Header from '../../components/Header.vue'
import AddressList from './components/AddressList.vue'
export default {
  name: 'MyAddressList',
  components: {
    Header,
    AddressList
  },
  setup () {
    const router = useRouter()
    const toAddAddressPage = () => {
      router.push({ name: 'AddAddress' })
    }
    return {
      toAddAddressPage
    }
  }
}
</script>

<style lang="scss" scoped>
  .address-list {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f5f5f5;
    padding: 0 18px;
    h3 {
      font-size: 14px;
      color: #333333;
      margin: 16px 0 12px;
    }
    .address-item {
      display: flex;
      align-items: center;
      padding: 18px 16px;
      box-sizing: border-box;
      height: 104px;
      margin-bottom: 16px;
      background: #fff;
      .left {
        flex: 1;
        line-height: 20px;
        font-size: 14px;
        p:first-child {
          color: #999999;
          margin-bottom: 8px;
          .name {
            margin-right: 66px;
          }
        }
        p:last-child {
          width: 260px;
          color: #333333;
        }
      }
    }
  }
</style>
