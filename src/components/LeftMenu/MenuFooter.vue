<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
</script>
<template>
  <div class="footer">
    <div class="new-list">
      <SvgIcon class="icon" name="plus" />
      <div>新建列表</div>
    </div>
    <div class="new-group">
      <SvgIcon class="icon" name="new-group" />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';
div.footer {
  height: 40px;
  display: flex;
  .new-list {
    padding: 0 10px;
    flex: 1 1 80%;
    display: flex;
    align-items: center;
    border-radius: 4px;
  }
  .new-group {
    padding: 0 10px;
    border-radius: 4px;
  }
  .new-group:hover,
  .new-list:hover {
    background-color: $light-gray;
  }
  .icon {
    width: 25px;
    height: 100%;
  }
}
</style>
