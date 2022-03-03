<script setup lang="ts">
import { register } from '@/services/user'
import { OpenMessage } from '@/utils/openComponents'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import OButton from './components/Button.vue'
import OCard from './components/Card.vue'
import { FormItem, validForm } from './components/form'
import OInput from './components/Input.vue'
import OLink from './components/Link.vue'

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

const redirectToLogin = (username?: string) => {
  if (username) {
    router.push({ path: '/login', query: { username } })
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
      redirectToLogin(registerForm.username.val)
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
  <OCard title="oToDo Register" :loading="isLoading">
    <template #default>
      <OInput
        v-model="registerForm.username.val"
        :valid="registerForm.username.isValid"
        :loading="isLoading"
        title="请输入有效的电子邮件地址、电话号码或 Skype 用户名"
        name="username"
        placeholder="用户名、电子邮件、电话或 Skype"
      />

      <OInput
        v-model="registerForm.nickname.val"
        :valid="registerForm.nickname.isValid"
        :loading="isLoading"
        title="请输入有效的昵称"
        name="nickname"
        placeholder="昵称"
      />

      <OInput
        v-model="registerForm.password.val"
        :valid="registerForm.password.isValid"
        :loading="isLoading"
        title="请输入有效的密码"
        type="password"
        name="password"
        placeholder="密码"
      />

      <OLink title="已经有了账户？" event="去登录" @click="redirectToLogin" />
    </template>

    <template #footer>
      <OButton title="登录" :loading="isLoading" @click="handleRegister" />
    </template>
  </OCard>
</template>
