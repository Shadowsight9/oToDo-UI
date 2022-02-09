<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
</script>
<template>
  <div class="profile">
    <div class="profile-avatar" title="黄 铮"></div>
    <div class="profile-account" title="huangzheng@shu.edu.cn">
      <div class="account-name">黄 铮</div>
      <div class="account-email">
        <span> huangzheng@shu.edu.cn </span>
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
