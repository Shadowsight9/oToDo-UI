<script setup lang="ts">
import oToDoLogo from '@/assets/images/oToDo-logo.jpg'
import LoggingIn from '@/assets/images/logging-in.gif'
import { ref, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { login } from '@/utils/userLogin'

const router = useRouter()
const isLogin = ref(true)
const isLoading = ref(false)

interface FromItem {
  val: string
  isValid: boolean
}
interface LoginFrom {
  username: FromItem
  password: FromItem
}
const loginForm: LoginFrom = reactive({
  username: { val: '', isValid: true },
  password: { val: '', isValid: true },
})

const { username, password } = toRefs(loginForm)

const changeMode = () => {
  isLogin.value = !isLogin.value
}
const handleLogin = async () => {
  isLoading.value = true
  for (const [k, v] of Object.entries(loginForm)) {
    v.isValid = true
    if (v.val === '') {
      v.isValid = false
      isLoading.value = false
      return
    }
  }

  try {
    await login(username.value.val, password.value.val)
  } catch (error) {
    console.error(error)
    isLoading.value = false
  }
  router.push('/')
}
</script>
<template>
  <div class="wrapper">
    <form v-if="isLogin" class="login-box">
      <img
        class="img-loading"
        :class="{ hidden: isLoading }"
        :src="LoggingIn"
        alt="logging-in"
      />
      <img class="img-logo" :src="oToDoLogo" alt="oToDo-logo" />
      <h1>oToDo Login</h1>
      <div class="input-group">
        <div class="group-row" :class="{ 'group-wearning': !username.isValid }">
          <p>请输入有效的电子邮件地址、电话号码或 Skype 用户名</p>
          <input
            id="username"
            v-model="username.val"
            type="text"
            name="username"
            :disabled="isLoading"
            placeholder="用户名、电子邮件、电话或 Skype"
          />
        </div>
        <div class="group-row" :class="{ 'group-wearning': !password.isValid }">
          <p>请输入有效的密码</p>
          <input
            id="password"
            v-model="password.val"
            type="password"
            name="password"
            :disabled="isLoading"
            placeholder="密码"
          />
        </div>
        <p class="change-mode">没有账户？<a @click="changeMode">创建一个</a></p>
      </div>

      <div class="button-group">
        <input
          type="submit"
          value="登录"
          :disabled="isLoading"
          @click.prevent="handleLogin"
        />
      </div>
    </form>
  </div>
</template>
<style scoped lang="scss">
.wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #a8cecf, #e6ae8c);

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    max-width: 380px;
    width: calc(100% - 40px);
    min-height: 330px;
    box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
    padding: 0 40px;

    .img-loading {
      width: calc(100% + 80px);
      visibility: hidden;
    }
    .hidden {
      visibility: unset;
    }

    .img-logo {
      height: 80px;
      width: min-content;
      object-fit: contain;
      margin-top: 40px;
    }
    h1 {
      margin: 10px 0 0 0;
      font-size: 24px;
    }
    .img-logo,
    h1 {
      align-self: flex-start;
    }

    .input-group {
      width: 98%;
      .group-row {
        margin: 20px 0;
        p {
          font-size: 14px;
          color: #e81123;
          display: none;
        }
        input {
          display: block;
          width: 100%;
          height: 25px;
          padding: 6px;
          border: 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.6);
          outline: none;
          font-size: 16px;
          &:hover {
            border-bottom: 1px solid rgba(0, 0, 0, 0.9);
          }
        }
      }

      .group-wearning {
        p {
          display: unset;
        }
        input {
          border-bottom: 1.5px solid #e81123;
          &:hover {
            border-bottom: 1.5px solid #e81123;
          }
        }
      }

      .change-mode {
        font-size: 14px;
        margin: 0;
        a {
          color: #0067b8;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
            color: #666;
          }
        }
      }
    }

    .button-group {
      margin-top: 10px;
      margin-bottom: 40px;
      align-self: flex-end;
      input {
        background-color: #0067b8;
        color: #fff;
        height: 36px;
        width: 100px;
        border: 0;
        float: right;
        &:hover {
          background-color: #005da6;
          cursor: pointer;
        }
        &:disabled {
          background-color: #d1d1d1;
          color: #b3b3b3;
          cursor: wait;
        }
      }
    }
  }
}
</style>
