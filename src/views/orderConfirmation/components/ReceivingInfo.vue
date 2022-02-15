<template>
  <div class="address-info">
    <div class="left">
      <p class="title">收货地址</p>
      <p class="receiving-address">北京理工大学国防科技园2号楼10层</p>
      <p class="name-tel">
        <span>瑶妹（先生）</span>
        <span>18385633024</span>
      </p>
    </div>
    <i class="iconfont">&#xe624;</i>
  </div>
</template>

<script>
export default {
  name: 'ReceivingInfo',
  setup (props, context) {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .address-info {
    display: flex;
    align-items: center;
    padding: 16px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 4px;
    width: 339px;
    margin: -80px auto 16px;
    .left {
      flex: 1;
      .title {
        font-size: 16px;
        color: #333333;
        line-height: 22px;
        margin-bottom: 14px;
      }
      .receiving-address {
        font-size: 14px;
        color: #333333;
        line-height: 20px;
        margin-bottom: 6px;
      }
      .name-tel {
        font-size: 12px;
        color: #666666;
      }
    }
  }
</style>
