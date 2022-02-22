<script setup lang="ts">
import { loginSession } from '@/apis/sessions'
import { OpenMessage } from '@/utils/openComponents'
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { FormItem, validForm } from './components/form'
import { goOAuthLogin, tryGithubOAuthLogin } from './components/oauth'

const router = useRouter()
const isLoading = ref(false)

const loginForm = reactive<{
  username: FormItem
  password: FormItem
}>({
  username: { val: '', isValid: true },
  password: { val: '', isValid: true },
})

const changeMode = () => {
  router.push('/register')
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

onMounted(async () => {
  const q = router.currentRoute.value.query

  if (typeof q['username'] == 'string') {
    loginForm.username.val = q['username']
  }

  if (
    typeof q['code'] == 'string' &&
    typeof q['state'] == 'string' &&
    (await tryGithubOAuthLogin(q['code'], q['state']))
  ) {
    router.push('/')
  }
})
</script>

<template>
  <div class="wrapper">
    <form class="login-box">
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
  </div>
</template>

<style scoped lang="scss">
@import './components/form.scss';
</style>
