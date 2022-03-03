<script setup lang="ts">
import { login } from '@/services/auth'
import { OpenMessage } from '@/utils/openComponents'
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import OButton from './components/Button.vue'
import OCard from './components/Card.vue'
import { FormItem, validForm } from './components/form'
import OInput from './components/Input.vue'
import OLink from './components/Link.vue'
import { goOAuthLogin, tryGithubOAuthLogin } from './components/oauth'

const router = useRouter()
const isLoading = ref(false)

const form = reactive<{
  username: FormItem
  password: FormItem
}>({
  username: { val: '', isValid: true },
  password: { val: '', isValid: true },
})

const redirectToRegister = () => {
  router.push('/register')
}

const handleLogin = () => {
  isLoading.value = true
  if (validForm(form) === false) {
    isLoading.value = false
    return
  }

  login(form.username.val, form.password.val)
    .then(() => router.push('/'))
    .catch((err) => {
      isLoading.value = false
      OpenMessage(err, 2)
    })
}

onMounted(async () => {
  const q = router.currentRoute.value.query

  if (typeof q['username'] == 'string') {
    form.username.val = q['username']
  }

  if (typeof q['code'] == 'string' && typeof q['state'] == 'string') {
    isLoading.value = true
    tryGithubOAuthLogin(q['code'], q['state'])
      .then(() => {
        router.push('/')
      })
      .catch((err) => {
        OpenMessage(err, 2)
      })
      .finally(() => {
        isLoading.value = false
      })
  }
})
</script>

<template>
  <OCard :loading="isLoading" title="oToDo Login">
    <template #default>
      <OInput
        v-model="form.username.val"
        :valid="form.username.isValid"
        :loading="isLoading"
        title="请输入有效的电子邮件地址、电话号码或 Skype 用户名"
        name="username"
        placeholder="用户名、电子邮件、电话或 Skype"
      />

      <OInput
        v-model="form.password.val"
        :valid="form.password.isValid"
        :loading="isLoading"
        title="请输入有效的密码"
        type="password"
        name="password"
        placeholder="密码"
      />

      <OLink title="第三方登陆" event="GitHub" @click="goOAuthLogin" />
      <OLink title="没有账户？" event="创建一个" @click="redirectToRegister" />
    </template>

    <template #footer>
      <OButton title="登录" :loading="isLoading" @click="handleLogin" />
    </template>
  </OCard>
</template>
