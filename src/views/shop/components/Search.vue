<template>
  <div class="search">
    <i class="iconfont" @click="handleBackClick">&#xe601;</i>
    <div class="search-input">
      <i class="iconfont">&#xe679;</i>
      <input type="text" placeholder="请输入商品名称搜索" />
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Search',
  setup () {
    const router = useRouter()
    const handleBackClick = () => {
      router.back()
    }

    return {
      handleBackClick
    }
  }
}
</script>

<style lang="scss" scoped>
  .search {
    margin: 16px 0 24px;
    display: flex;
    height: 32px;
    line-height: 32px;
    .iconfont {
      font-size: 20px;
      padding-right: 12px;
      color: #B7B7B7;
    }
    .search-input {
      flex: 1;
      display: flex;
      background: #f5f5f5;
      border-radius: 16px;
      padding: 0 16px;
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
  }
</style>
