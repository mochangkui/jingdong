<template>
  <div class="search">
    <i class="iconfont">&#xe679;</i>
    <input type="text" placeholder="山姆会员商店优惠商品">
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="scss" scoped>
  .search {
    display: flex;
    align-items: center;
    height: 32px;
    padding: 0 18px;
    background: #f5f5f5;
    border-radius: 16px;
    .iconfont {
      font-size: 20px;
      margin-right: 12px;
      color: #B7B7B7;
    }
    input {
      flex: 1;
      outline: none;
      border: none;
      background: transparent;
      font-size: 14px;
      &::placeholder {
        color: #B7B7B7;
      }
    }
  }
</style>
