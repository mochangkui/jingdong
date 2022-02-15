<template>
  <div class="banner">
    <img class="banner-img" src="../images/banner.jpg" />
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="scss" scoped>
  .banner {
    margin-top: 12px;
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;
    .banner-img {
      width: 100%;
    }
  }
</style>
