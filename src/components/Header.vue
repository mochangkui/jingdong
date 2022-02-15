<template>
  <div class="header">
    <i class="iconfont" @click="goBack">&#xe601;</i>
    <div class="title">
      <slot />
    </div>
    <div class="right" @click="dispatchEmit">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Header',
  setup (props, context) {
    const router = useRouter()
    const { emit } = context
    const goBack = () => {
      router.back()
    }
    const dispatchEmit = () => {
      emit('dispatchEmit')
    }
    return {
      dispatchEmit,
      goBack
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    color: #333;
    background: #fff;
    text-align: center;
    .iconfont {
      width: 44px;
      font-size: 22px;
    }
    .right {
      width: 44px;
      font-size: 14px;
    }
  }
</style>
