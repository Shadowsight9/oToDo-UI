<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import type { ItemType } from '@/types/INavItem'
import { ref, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    type: ItemType
  }>(),
  {
    type: 'my-day',
  }
)

const getTitle = (itemType: ItemType) => {
  switch (itemType) {
    case 'my-day':
      return '我的一天'
    case 'important-todo':
      return '重要'
    case 'in-plan':
      return '计划内'
    case 'assign-to-me':
      return '已分配给我'
    case 'task-todo':
      return '任务'
    default:
      // TODO: 直接根据标题返回
      return 'To Do List'
  }
}

const getIconName = (itemType: string | undefined) => {
  switch (itemType) {
    case 'todo-list':
      return 'list'
    case 'my-day':
      return 'sun'
    case 'important-todo':
      return 'star'
    case 'in-plan':
      return 'plan'
    case 'assign-to-me':
      return 'user'
    case 'task-todo':
      return 'home'
    default:
      return 'list'
  }
}

const title = computed(() => getTitle(props.type))
const iconName = computed(() => getIconName(props.type))
</script>
<template>
  <header class="board-header">
    <template v-if="props.type === 'my-day'">
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
