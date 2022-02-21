<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { loginSession } from '@/apis/sessions'
import { OpenMessage } from '@/utils/openComponents'
import { register } from '@/apis/user'
import { goOAuthLogin, tryGithubOAuthLogin } from './oauth'

const router = useRouter()
const isLogin = ref(true)
const isLoading = ref(false)

interface FormItem {
  val: string
  isValid: boolean
}

interface LoginForm {
  username: FormItem
  password: FormItem
}

interface RegisterForm {
  username: FormItem
  password: FormItem
  nickname: FormItem
}

const loginForm: LoginForm = reactive({
  username: { val: '', isValid: true },
  password: { val: '', isValid: true },
})

const registerForm: RegisterForm = reactive({
  username: { val: '', isValid: true },
  password: { val: '', isValid: true },
  nickname: { val: '', isValid: true },
})

const changeMode = () => {
  isLogin.value = !isLogin.value
}

const validForm = (from: LoginForm | RegisterForm) => {
  for (const [, v] of Object.entries(from)) {
    v.isValid = true
    if (v.val === '') {
      v.isValid = false
      return false
    }
  }
  return true
}

const handleLogin = () => {
  isLoading.value = true
  if (validForm(loginForm) === false) {
    isLoading.value = false
    return
  }
  loginSession(loginForm.username.val, loginForm.password.val)
    .then(() => router.push('/'))
    .catch((err) => {
      isLoading.value = false
      OpenMessage(err, 2)
    })
}

const handleRegister = () => {
  isLoading.value = true
  if (validForm(registerForm) === false) {
    isLoading.value = false
    return
  }
  register(
    registerForm.username.val,
    registerForm.nickname.val,
    registerForm.password.val
  )
    .then(() => {
      changeMode()
      loginForm.username = registerForm.username
      loginForm.password = registerForm.password
    })
    .catch((err) => {
      OpenMessage(err, 2)
    })
    .finally(() => {
      isLoading.value = false
    })
}

onMounted(async () => {
  const q = router.currentRoute.value.query
  if (typeof q['code'] == 'string' && typeof q['state'] == 'string') {
    if (await tryGithubOAuthLogin(q['code'], q['state'])) {
      router.push('/')
    }
  }
})
</script>
<template>
  <div class="wrapper">
    <form v-if="isLogin" class="login-box">
      <img
        class="img-loading"
        :class="{ hidden: isLoading }"
        src="@/assets/images/logging-in.gif"
        alt="logging-in"
      />
      <img
        class="img-logo"
        src="@/assets/images/oToDo-logo.jpg"
        alt="oToDo-logo"
      />
      <h1>oToDo Login</h1>
      <div class="input-group">
        <div
          class="group-row"
          :class="{ 'group-wearning': !loginForm.username.isValid }"
        >
          <p>请输入有效的电子邮件地址、电话号码或 Skype 用户名</p>
          <input
            id="username"
            v-model="loginForm.username.val"
            type="text"
            name="username"
            :disabled="isLoading"
            placeholder="用户名、电子邮件、电话或 Skype"
          />
        </div>
        <div
          class="group-row"
          :class="{ 'group-wearning': !loginForm.password.isValid }"
        >
          <p>请输入有效的密码</p>
          <input
            id="password"
            v-model="loginForm.password.val"
            type="password"
            name="password"
            :disabled="isLoading"
            placeholder="密码"
          />
        </div>

        <p class="change-mode">
          第三方登陆 <a @click="goOAuthLogin">GitHub</a>
        </p>

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
    <form v-else class="register-box">
      <img
        class="img-loading"
        :class="{ hidden: isLoading }"
        src="@/assets/images/logging-in.gif"
        alt="logging-in"
      />
      <img
        class="img-logo"
        src="@/assets/images/oToDo-logo.jpg"
        alt="oToDo-logo"
      />
      <h1>oToDo Register</h1>
      <div class="input-group">
        <div
          class="group-row"
          :class="{ 'group-wearning': !registerForm.username.isValid }"
        >
          <p>请输入有效的电子邮件地址、电话号码或 Skype 用户名</p>
          <input
            id="username"
            v-model="registerForm.username.val"
            type="text"
            name="username"
            :disabled="isLoading"
            placeholder="用户名、电子邮件、电话或 Skype"
          />
        </div>
        <div
          class="group-row"
          :class="{ 'group-wearning': !registerForm.nickname.isValid }"
        >
          <p>请输入有效的昵称</p>
          <input
            id="nickname"
            v-model="registerForm.nickname.val"
            type="text"
            name="nickname"
            :disabled="isLoading"
            placeholder="昵称"
          />
        </div>
        <div
          class="group-row"
          :class="{ 'group-wearning': !registerForm.password.isValid }"
        >
          <p>请输入有效的密码</p>
          <input
            id="password"
            v-model="registerForm.password.val"
            type="password"
            name="password"
            :disabled="isLoading"
            placeholder="密码"
          />
        </div>

        <p class="change-mode">
          已经有了账户？<a @click="changeMode">去登录</a>
        </p>
      </div>
      <div class="button-group">
        <input
          type="submit"
          value="注册"
          :disabled="isLoading"
          @click.prevent="handleRegister"
        />
      </div>
    </form>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';
.wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $login-background;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $login-from-background;
    max-width: 380px;
    width: calc(100% - 40px);
    min-height: 330px;
    box-shadow: 0 2px 6px $light-transparency;
    padding: 0 40px;

    @media (max-width: 768px) {
      height: 100%;
      width: 100vw;
    }

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
      margin: 10px 0 0 10px;
      font-size: $font-size-xxlarge;
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
          display: none;
        }
        input {
          display: block;
          width: 100%;
          height: 25px;
          padding: 6px;
          border: 0;
          border-bottom: 1px solid $medium-transparency;
          outline: none;
          font-size: $font-size-large;
          &:hover {
            border-bottom: 1px solid $deep-transparency;
          }
        }
      }

      .group-wearning {
        p {
          display: unset;
          font-size: $font-size-medium;
          color: $red;
        }
        input,
        input:hover {
          border-bottom: 1.5px solid $red;
        }
      }

      .change-mode {
        font-size: $font-size-medium;
        margin: 0;
        a {
          color: $royal-blue;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
            color: $slate-gray;
          }
        }
      }
    }

    .button-group {
      margin-top: 10px;
      margin-bottom: 40px;
      align-self: flex-end;
      input {
        background-color: $royal-blue;
        color: $pure-white;
        height: 36px;
        width: 100px;
        border: 0;
        float: right;
        &:hover {
          background-color: $dark-blue;
          cursor: pointer;
        }
        &:disabled {
          background-color: $light-gray;
          color: $slate-gray;
          cursor: wait;
        }
      }
    }
  }
}
</style>
