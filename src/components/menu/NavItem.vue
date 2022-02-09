<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { computed } from 'vue'

const getIconName = (itemType: string) => {
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

const props = defineProps({
  type: {
    type: String,
    default: 'todo-list',
  },
  title: {
    type: String,
    default: '无标题列表',
  },
  todoNum: {
    type: Number,
    default: 0,
  },
  isChecked: {
    type: Boolean,
    default: false,
  },
})

const iconName = computed(() => getIconName(props.type))
</script>
<template>
  <li :class="{ checked: isChecked }">
    <SvgIcon class="icon" :class="type" :name="iconName"></SvgIcon>
    <span class="item-title">{{ title }}</span>
    <span v-if="todoNum" class="todo-num">{{ todoNum }}</span>
  </li>
</template>
<style scoped lang="scss">
@import '@/assets/styles/menu.item.scss';
li {
  .todo-num {
    width: 16px;
    text-align: center;
    font-size: $font-size-small;
    margin-right: 10px;
    background-color: $menu-mark;
    padding: calc($font-size-small / 4);
    border-radius: $circular-border;
  }
}
</style>
