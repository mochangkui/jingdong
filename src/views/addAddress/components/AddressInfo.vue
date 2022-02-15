<template>
  <div class="address-info">
    <div class="container">
      <div class="info-item">
        <label for="city">所在城市：</label>
        <input type="text" id="city" placeholder="如北京市" v-model="address.city">
      </div>
      <div class="info-item">
        <label for="area">小区/大厦/学校：</label>
        <input type="text" id="area" placeholder="如理工大学国防科技园" v-model="address.area">
      </div>
      <div class="info-item">
        <label for="building-num">楼号-门牌号：</label>
        <input type="text" id="building-num" placeholder="A号楼B层" v-model="address.buildingNum">
      </div>
      <div class="info-item">
        <label for="name">收货人：</label>
        <input type="text" id="name" placeholder="请填写收货人的姓名" v-model="address.name">
      </div>
      <div class="info-item">
        <label for="tel">联系电话：</label>
        <input type="text" id="tel" placeholder="请填写收货手机号" v-model="address.tel">
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'AddressList',
  setup () {
    const address = reactive({
      city: '',
      area: '',
      buildingNum: '',
      name: '',
      tel: ''
    })

    return {
      address
    }
  }
}
</script>

<style lang="scss" scoped>
  .address-info {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f5f5f5;
    overflow: auto;
    .container {
      margin-top: 12px;
      background: #fff;
      .info-item {
        line-height: 44px;
        margin: 0 18px;
        font-size: 14px;
        color: #666666;
        border-bottom: solid 1px #F1F1F1;
        input {
          border: none;
          outline: none;
          &::placeholder {
            font-size: 14px;
            color: #3F3F3F;
          }
        }
      }
      .info-item:last-child {
        border-bottom: none;
      }
    }
  }
</style>
