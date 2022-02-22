<script setup lang="ts">
import { register } from '@/apis/user'
import { OpenMessage } from '@/utils/openComponents'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { FormItem, validForm } from './components/form'

const router = useRouter()
const isLoading = ref(false)

const registerForm = reactive<{
  username: FormItem
  password: FormItem
  nickname: FormItem
}>({
  username: { val: '', isValid: true },
  password: { val: '', isValid: true },
  nickname: { val: '', isValid: true },
})

const changeMode = (username?: string) => {
  if (username) {
    router.push({
      path: '/login',
      query: { username },
    })
  } else {
    router.push('/login')
  }
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
      changeMode(registerForm.username.val)
    })
    .catch((err) => {
      OpenMessage(err, 2)
    })
    .finally(() => {
      isLoading.value = false
    })
}
</script>

<template>
  <div class="wrapper">
    <form class="register-box">
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
          已经有了账户？<a @click="() => changeMode()">去登录</a>
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
@import './components/form.scss';
</style>
