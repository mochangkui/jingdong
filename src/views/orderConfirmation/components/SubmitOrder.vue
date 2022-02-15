<template>
  <div class="bottom">
    <div class="total">实付金额 ¥62</div>
    <div class="btn" @click="submitOrder">提交订单</div>
  </div>
  <div class="mask" v-if="showMask" @click="cancelOrder">
    <div class="popup">
      <p>确认要离开收银台？</p>
      <p>请尽快完成支付，否则将被取消</p>
      <div class="btns">
        <div class="btn cancel" @click="cancelOrder">取消订单</div>
        <div class="btn confirm" @click="confirmPay">确认支付</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'SubmitOrder',
  setup (props, context) {
    const showMask = ref(false)
    const router = useRouter()
    // 提交订单
    const submitOrder = () => {
      showMask.value = true
    }
    // 取消订单
    const cancelOrder = () => {
      showMask.value = false
    }
    // 确认支付
    const confirmPay = () => {
      showMask.value = true
      router.push({ name: 'OrderList' })
    }
    return {
      showMask,
      submitOrder,
      cancelOrder,
      confirmPay
    }
  }
}
</script>

<style lang="scss" scoped>
  .bottom {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    line-height: 50px;
    display: flex;
    .total {
      flex: 1;
      font-size: 14px;
      color: #333333;
      padding-left: 24px;
    }
    .btn {
      width: 98px;
      background: #4FB0F9;
      font-size: 14px;
      color: #FFFFFF;
      text-align: center;
    }
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.50);
    .popup {
      padding: 24px;
      box-sizing: border-box;
      width: 301px;
      height: 157px;
      background: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 4px;
      text-align: center;
      p:first-child {
        font-size: 18px;
        color: #333333;
        line-height: 25px;
      }
      p:nth-child(2) {
        font-size: 14px;
        color: #666666;
        line-height: 20px;
        margin: 8px 0 24px;
      }
      .btns {
        .btn {
          display: inline-block;
          width: 80px;
          height: 32px;
          line-height: 32px;
          border-radius: 16px;
          font-size: 14px;
        }
        .cancel {
          border: 1px solid #4FB0F9;
          color: #0091FF;
          margin-right: 24px;
        }
        .confirm {
          background: #4FB0F9;
          color: #fff;
        }
      }
    }
  }
</style>
