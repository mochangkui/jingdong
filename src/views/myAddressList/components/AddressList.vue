<template>
  <div class="address-list">
    <h3>我的收货地址</h3>
    <div class="address-item">
      <div class="left">
        <p>
          <span class="name">莫莫</span>
          <span class="tel">18385633024</span>
        </p>
        <p>北京市海淀区西三环北路 2号院 北京理工大学 国防科技园2号楼 10层</p>
      </div>
      <i class="iconfont">&#xe624;</i>
    </div>
    <div class="address-item">
      <div class="left">
        <p>
          <span class="name">莫莫</span>
          <span class="tel">18385633024</span>
        </p>
        <p>北京市海淀区西三环北路 2号院 北京理工大学 国防科技园2号楼 10层</p>
      </div>
      <i class="iconfont">&#xe624;</i>
    </div>
    <div class="address-item">
      <div class="left">
        <p>
          <span class="name">莫莫</span>
          <span class="tel">18385633024</span>
        </p>
        <p>北京市海淀区西三环北路 2号院 北京理工大学 国防科技园2号楼 10层</p>
      </div>
      <i class="iconfont">&#xe624;</i>
    </div>
    <div class="address-item">
      <div class="left">
        <p>
          <span class="name">莫莫</span>
          <span class="tel">18385633024</span>
        </p>
        <p>北京市海淀区西三环北路 2号院 北京理工大学 国防科技园2号楼 10层</p>
      </div>
      <i class="iconfont">&#xe624;</i>
    </div>
    <div class="address-item">
      <div class="left">
        <p>
          <span class="name">莫莫</span>
          <span class="tel">18385633024</span>
        </p>
        <p>北京市海淀区西三环北路 2号院 北京理工大学 国防科技园2号楼 10层</p>
      </div>
      <i class="iconfont">&#xe624;</i>
    </div>
    <div class="address-item">
      <div class="left">
        <p>
          <span class="name">莫莫</span>
          <span class="tel">18385633024</span>
        </p>
        <p>北京市海淀区西三环北路 2号院 北京理工大学 国防科技园2号楼 10层</p>
      </div>
      <i class="iconfont">&#xe624;</i>
    </div>
    <div class="address-item">
      <div class="left">
        <p>
          <span class="name">莫莫</span>
          <span class="tel">18385633024</span>
        </p>
        <p>北京市海淀区西三环北路 2号院 北京理工大学 国防科技园2号楼 10层</p>
      </div>
      <i class="iconfont">&#xe624;</i>
    </div>
    <div class="address-item">
      <div class="left">
        <p>
          <span class="name">莫莫</span>
          <span class="tel">18385633024</span>
        </p>
        <p>北京市海淀区西三环北路 2号院 北京理工大学 国防科技园2号楼 10层</p>
      </div>
      <i class="iconfont">&#xe624;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddressList'
}
</script>

<style lang="scss" scoped>
  .address-list {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f5f5f5;
    padding: 0 18px;
    overflow: auto;
    h3 {
      font-size: 14px;
      color: #333333;
      margin: 16px 0 12px;
    }
    .address-item {
      display: flex;
      align-items: center;
      padding: 18px 16px;
      box-sizing: border-box;
      height: 104px;
      margin-bottom: 16px;
      background: #fff;
      .left {
        flex: 1;
        line-height: 20px;
        font-size: 14px;
        p:first-child {
          color: #999999;
          margin-bottom: 8px;
          .name {
            margin-right: 66px;
          }
        }
        p:last-child {
          width: 260px;
          color: #333333;
        }
      }
    }
  }
</style>
