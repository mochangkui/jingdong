<template>
  <div class="shop">
    <img class="shop-img" :src="data.imgUrl" :alt="data.name">
    <div class="nearby-info">
      <p class="name">{{data.name}}</p>
      <p class="sales-volume">月售{{data.sales}}  起送￥{{data.expressLimit}}  基础运费￥{{data.expressPrice}}</p>
      <p class="discount">{{data.slogan}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/viriables.scss';
  .shop {
    display: flex;
    margin-bottom: 12px;
    .shop-img {
      width: 56px;
      height: 56px;
    }
    .nearby-info {
      flex: 1;
      margin-left: 16px;
      padding-bottom: 12px;
      border-bottom: solid 1px #F1F1F1;
      .name {
        font-size: 16px;
        color: $text-color;
      }
      .sales-volume {
        margin: 8px 0;
        font-size: 13px;
        color: $text-color;
      }
      .discount {
        font-size: 13px;
        color: #E93B3B;
      }
    }
  }
</style>
