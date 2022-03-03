<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { reactive, ref } from 'vue'
import { useDataStore } from '@/store/dataStore'
import { IMenuProps } from '@/types/IMouseMenu'
import { logout } from '@/services/sessions'
import { useRouter } from 'vue-router'
import { OpenMessage } from '@/utils/openComponents'

const dataStore = useDataStore()
const router = useRouter()

const listLmbHandler = (index: number) => {
  switch (index) {
    case 0:
      logout()
        .then(() => {
          router.push({ name: 'login' })
        })
        .catch((err) => OpenMessage(err, 2))
      break
    default:
      return
  }
}

const listLmbMenu = reactive<IMenuProps>({
  data: [{ text: '退出登录', iconName: 'home' }],
  handler: listLmbHandler,
})

const pos = ref('bottom')
</script>
<template>
  <div v-lmb-menu:[pos]="listLmbMenu" class="profile">
    <div class="profile-avatar"></div>
    <div class="profile-account">
      <div class="account-name">{{ dataStore.userData?.name }}</div>
      <div class="account-email">
        <span> {{ dataStore.userData?.email }} </span>
        <SvgIcon class="icon" name="expand" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';
div.profile {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 80px;
  > * {
    height: 60px;
  }
  .profile-avatar {
    width: 60px;
    background-color: $light-steel-blue;
    border-radius: $circular-border;
  }
  .profile-account {
    width: 180px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .account-name {
      font-size: $font-size-medium;
      font-weight: bold;
    }
    .account-email {
      font-size: $font-size-small;
      display: inline-flex;
      margin-top: calc($font-size-small * 0.8);
      color: $font-color-gray;
    }
    .icon {
      width: $font-size-medium;
      height: $font-size-medium;
    }
  }
}
</style>
