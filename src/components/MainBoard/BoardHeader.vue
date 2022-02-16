<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import type { ItemType } from '@/types/INavItem'
const props = withDefaults(
  defineProps<{
    type: ItemType
    iconName: string
    title: string
  }>(),
  {
    iconName: 'list',
    title: '空列表',
  }
)
</script>
<template>
  <header class="board-header">
    <template v-if="type === 'my-day'">
      <div class="header-title">
        <h1>我的一天</h1>
        <p>2月1日，星期二</p>
      </div>
    </template>
    <template v-else>
      <SvgIcon class="header-title-icon" :name="iconName" />
      <span class="header-title-text"> {{ title }} </span>
    </template>

    <div class="header-button-group">
      <SvgIcon class="icon" name="bulb"></SvgIcon>
      <SvgIcon class="icon" name="settings"></SvgIcon>
    </div>
  </header>
</template>
<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';
.board-header {
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: $pure-white;

  .header-title-icon {
    height: 40px;
    width: 40px;
  }
  .header-title-text {
    flex: 1;
    width: 100%;
    font-size: 2rem;
    margin-left: 10px;
    line-height: 100%;
  }
  .header-title {
    p,
    h1 {
      margin: 0.2em 0;
    }
  }
  .header-button-group {
    .icon {
      width: $icon-size-large;
      height: $icon-size-large;
      margin: 5px;
      padding: 5px;
      border-radius: 4px;
      &:hover {
        background-color: $light-transparency;
      }
    }
  }
}
</style>
