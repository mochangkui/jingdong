<template>
  <div class="login">
    <img src="./images/user.png" alt="头像" class="avatar">
    <div class="tel-input">
      <input type="text" placeholder="请输入手机号" v-model="userInfo.username">
    </div>
    <div class="password-input">
      <input type="password" placeholder="请输入密码" v-model="userInfo.password">
    </div>
    <button class="login-btn" @click="handleLogin">登录</button>
    <p class="register" @click="handleRegister">立即注册</p>
  </div>
  <Toast v-if="userInfo.showToast" :message="userInfo.toastMessage" />
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { request } from '../../utils/request.js'
import Toast from '../../components/Toast.vue'
export default {
  name: 'Login',
  components: {
    Toast
  },
  setup () {
    const router = useRouter()
    const userInfo = reactive({
      username: '',
      password: '',
      showToast: false,
      toastMessage: ''
    })
    // 登录
    const handleLogin = async () => {
      // 使用axiso直接请求
      // axios.get('/mock/login.json', {
      //   username: userInfo.username,
      //   password: userInfo.password
      // }).then(() => {
      //   localStorage.isLogin = true
      //   router.push({ name: 'Home' })
      // }).catch(() => {
      //   alert('失败')
      // })

      // 使用async await
      // try {
      //   const result = await axios.get('/mock/login.json', {
      //     username: userInfo.username,
      //     password: userInfo.password
      //   })
      //   if (result?.data?.status === 0) {
      //     localStorage.isLogin = true
      //     router.push({ name: 'Home' })
      //   } else {
      //     alert('失败')
      //   }
      // } catch (error) {
      //   alert('请求失败')
      // }

      // 使用封装之后的axios
      try {
        const result = await request({
          url: '/mock/login.json',
          method: 'GET',
          data: {
            username: userInfo.username,
            password: userInfo.password
          }
        })
        if (result?.data?.status === 200) {
          localStorage.isLogin = true
          router.push({ name: 'Home' })
        } else {
          userInfo.showToast = true
          userInfo.toastMessage = '登录失败'
          setTimeout(() => {
            userInfo.showToast = false
          }, 2000)
        }
      } catch (error) {
        userInfo.showToast = true
        userInfo.toastMessage = '请求失败'
        setTimeout(() => {
          userInfo.showToast = false
        }, 2000)
      }
    }
    // 注册
    const handleRegister = () => {
      router.push({ name: 'Register' })
    }
    return {
      handleLogin,
      handleRegister,
      userInfo
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
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
    .tel-input {
      margin-bottom: 16px;
    }
    .login-btn {
      width: 100%;
      height: 48px;
      background: #0091FF;
      box-shadow: 0 4px 8px 0 rgba(0,145,255,0.32);
      border-radius: 4px;
      margin: 32px 0 16px;
      font-size: 16px;
      color: #FFFFFF;
      text-align: center;
      border: none;
    }
    .register {
      font-size: 14px;
      color: rgba(0,0,0,0.50);
    }
  }
</style>
