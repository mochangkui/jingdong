<template>
  <div class="icons">
    <div class="item">
      <img class="item-img" src="../images/超市.png" />
      <p class="item-desc">超市便利</p>
    </div>
    <div class="item">
      <img class="item-img" src="../images/菜市场.png" />
      <p class="item-desc">菜市场</p>
    </div>
    <div class="item">
      <img class="item-img" src="../images/水果店.png" />
      <p class="item-desc">水果店</p>
    </div>
    <div class="item">
      <img class="item-img" src="../images/鲜花.png" />
      <p class="item-desc">鲜花绿植</p>
    </div>
    <div class="item">
      <img class="item-img" src="../images/医药健康.png" />
      <p class="item-desc">医药健康</p>
    </div>
    <div class="item">
      <img class="item-img" src="../images/家居.png" />
      <p class="item-desc">家居时尚</p>
    </div>
    <div class="item">
      <img class="item-img" src="../images/蛋糕.png" />
      <p class="item-desc">烘培蛋糕</p>
    </div>
    <div class="item">
      <img class="item-img" src="../images/签到.png" />
      <p class="item-desc">签到</p>
    </div>
    <div class="item">
      <img class="item-img" src="../images/大牌免运.png" />
      <p class="item-desc">大牌免运</p>
    </div>
    <div class="item">
      <img class="item-img" src="../images/红包.png" />
      <p class="item-desc">红包套餐</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Icons'
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/viriables.scss';
  .icons {
    .item {
      display: inline-block;
      text-align: center;
      width: 20%;
      .item-img {
        width: 40px;
        height: 40px;
        margin: 16px 0 6px;
      }
      .item-desc {
        font-size: 12px;
        color: $text-color;
      }
    }
  }
</style>
