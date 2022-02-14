<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { computed, PropType, ref } from 'vue'
import { INavItem } from '@/types/INavItem'

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

const props = defineProps({
  data: {
    type: Object as PropType<INavItem>,
    required: true,
  },
})

const iconName = computed(() => getIconName(props.data.type))
</script>
<template>
  <li :class="{ checked: data.isChecked }">
    <SvgIcon class="icon" :class="data.type" :name="iconName" />
    <span class="item-title">{{ data.title }}</span>
    <span v-if="data.todoNum" class="todo-num">{{ data.todoNum }}</span>
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
