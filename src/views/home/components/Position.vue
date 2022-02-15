<template>
  <div class="position">
    <i class="iconfont">&#xe611;</i>
    <span class="current-position">中华人民共和国贵州贵阳黔南独山基长镇麻懂</span>
    <i class="iconfont">&#xe691;</i>
  </div>
</template>

<script>
export default {
  name: 'Position'
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/viriables.scss';
  @import '../../../assets/mixins.scss';
  .position {
    display: flex;
    .iconfont {
      font-size: 20px;
    }
    .current-position {
      flex: 1;
      padding: 0 8px;
      font-size: 16px;
      color: $text-color;
      @include ellipsis;
    }
  }
</style>
