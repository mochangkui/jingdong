<template>
  <Position class="position" />
  <div class="home">
    <Search />
    <Banner />
    <Icons />
    <div class="gap"></div>
    <Nearby />
    <Footer />
  </div>
</template>

<script>
import Position from './components/Position.vue'
import Search from './components/Search.vue'
import Icons from './components/Icons.vue'
import Banner from './components/Banner.vue'
import Nearby from './components/Nearby.vue'
import Footer from '../../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Position,
    Search,
    Icons,
    Banner,
    Nearby,
    Footer
  }
}
</script>

<style lang="scss" scoped>
  .position {
    padding: 16px 18px;
  }
  .home {
    position: absolute;
    top: 52px;
    left: 0;
    bottom: 49px;
    right: 0;
    overflow-y: auto;
    padding: 0 18px;
    .gap {
      margin: 16px -18px 0;
      height: 10px;
      background: #F1F1F1;
    }
  }
</style>
