<template>
  <div class="register">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="头像" class="avatar">
    <div class="tel-input">
      <input type="text" placeholder="请输入手机号" v-model="userRegisterInfo.username">
    </div>
    <div class="password-input">
      <input type="password" placeholder="请输入密码" v-model="userRegisterInfo.password">
    </div>
    <div class="password-input">
      <input type="password" placeholder="确认密码" v-model="userRegisterInfo.password2">
    </div>
    <button class="login-btn" @click="handleLogin">注册</button>
    <p class="register-btn" @click="handleRegister">已有账号去登录</p>
  </div>
  <Toast v-if="userRegisterInfo.showToast" :message="userRegisterInfo.toastMessage" />
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { request } from '../../utils/request.js'
import Toast from '../../components/Toast.vue'
export default {
  name: 'Register',
  components: {
    Toast
  },
  setup () {
    const router = useRouter()
    const userRegisterInfo = reactive({
      username: '',
      password: '',
      password2: '',
      showToast: false,
      toastMessage: ''
    })
    // 登录
    const handleLogin = async () => {
      try {
        const result = await request({
          url: '/api/register.json',
          method: 'GET',
          data: {
            username: userRegisterInfo.username,
            password: userRegisterInfo.password,
            password2: userRegisterInfo.password2
          }
        })
        if (result?.data?.status === 0) {
          router.push({ name: 'Login' })
        } else {
          userRegisterInfo.showToast = true
          userRegisterInfo.toastMessage = '注册失败'
          setTimeout(() => {
            userRegisterInfo.showToast = false
          }, 2000)
        }
      } catch (error) {
        userRegisterInfo.showToast = true
        userRegisterInfo.toastMessage = '请求失败'
        setTimeout(() => {
          userRegisterInfo.showToast = false
        }, 2000)
      }
    }

    // 注册
    const handleRegister = () => {
      router.push({ name: 'Login' })
    }
    return {
      handleLogin,
      handleRegister,
      userRegisterInfo
    }
  }
}
</script>

<style lang="scss" scoped>
  .register {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    text-align: center;
    padding: 0 40px;
    .avatar {
      width: 66px;
      height: 66px;
      margin-bottom: 40px;
    }
    .tel-input, .password-input {
      height: 48px;
      background: #F9F9F9;
      border-radius: 6px;
      border: 1px solid rgba(0,0,0,0.10);
      margin-bottom: 16px;
      input {
        width: 100%;
        height: 100%;
        border: 0;
        outline: none;
        background: transparent;
        padding: 0 16px;
        font-size: 16px;
        &::placeholder {
          font-size: 16px;
          color: rgba(0,0,0,0.50);
        }
      }
    }
    .login-btn {
      width: 100%;
      height: 48px;
      background: #0091FF;
      box-shadow: 0 4px 8px 0 rgba(0,145,255,0.32);
      border-radius: 4px;
      margin: 16px 0;
      font-size: 16px;
      color: #FFFFFF;
      text-align: center;
      border: none;
    }
    .register-btn {
      font-size: 14px;
      color: rgba(0,0,0,0.50);
    }
  }
</style>
