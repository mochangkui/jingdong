<template>
  <div class="header"></div>
  <div class="user-content">
    <div class="user-info">
      <img src="http://www.dell-lee.com/imgs/avatar.jpg" alt="" class="avatar">
      <p class="user-name">热心人莫先生</p>
      <p class="user-id">ID: 23569745662</p>
    </div>
    <ul class="desc">
      <li>
        <p>红包</p>
        <p>218</p>
      </li>
      <li>
        <p>优惠券</p>
        <p>12张</p>
      </li>
      <li>
        <p>鲜豆</p>
        <p>88</p>
      </li>
      <li>
        <p>白条</p>
        <p>1000</p>
      </li>
    </ul>
  </div>
  <ul class="list">
    <li>
      <i class="iconfont wallet">&#xe659;</i>
      <span>我的钱包</span>
      <i class="iconfont right">&#xe624;</i>
    </li>
    <li>
      <router-link :to="{ name: 'MyAddressList' }">
        <i class="iconfont address">&#xec88;</i>
        <span>我的地址</span>
        <i class="iconfont right">&#xe624;</i>
      </router-link>
    </li>
    <li>
      <i class="iconfont help">&#xe62e;</i>
      <span>客服与帮助</span>
      <i class="iconfont right">&#xe624;</i>
    </li>
  </ul>
  <div class="log-out">退出登录</div>
  <Footer />
</template>

<script>
import Footer from '../../components/Footer.vue'
export default {
  name: 'OrderList',
  components: {
    Footer
  },
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    height: 230px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    background-image: linear-gradient(239deg, #3A6FF3 0%, #50C7FB 100%);
  }
  .user-content {
    margin: -140px auto 0;
    width: 339px;
    height: 203px;
    background: #FFFFFF;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.08);
    border-radius: 8px;
    .user-info {
      text-align: center;
      margin-top: -47px;
      .avatar {
        margin-top: -47px;
        width: 94px;
        height: 94px;
        border-radius: 50%;
        margin-bottom: 12px;
      }
      .user-name {
        font-size: 24px;
        color: #262628;
        letter-spacing: 0.19px;
        line-height: 36px;
      }
      .user-id {
        font-size: 14px;
        color: #C1C0C9;
        line-height: 20px;
      }
    }
    ul {
      display: flex;
      border-top: solid 1px #F1F1F1;
      margin-top: 12px;
      li {
        flex: 1;
        text-align: center;
        p:first-child {
          line-height: 17px;
          margin: 12px 0 3px;
          font-size: 12px;
          color: #C1C0C9;
        }
        p:last-child {
          font-size: 20px;
          color: #262628;
          line-height: 28px;
        }
      }
    }
  }
  .list {
    width: 339px;
    margin: 16px auto 0;
    background: #FFFFFF;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.08);
    border-radius: 8px;
    padding: 16px;
    box-sizing: border-box;
    li {
      margin-bottom: 26px;
      a {
        display: block;
        text-decoration: none;
        outline: none;
      }
      span {
        font-size: 14px;
        color: #262626;
        margin-left: 12px;
      }
      .wallet {
        color: #ED4A47;
        font-size: 22px;
      }
      .address {
        color: #32C5FF;
        font-size: 22px;
      }
      .help {
        color: #9013FE;
        font-size: 22px;
      }
      .right {
        float: right;
      }
    }
    li:last-child {
      margin: 0;
    }
  }
  .log-out {
    line-height: 40px;
    width: 339px;
    font-size: 18px;
    text-align: center;
    color: #fff;
    margin: 20px auto 0;
    background-image: linear-gradient(239deg, #3A6FF3 0%, #50C7FB 100%);
    border-radius: 8px;
  }
</style>
