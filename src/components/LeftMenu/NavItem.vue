<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { INavItem } from '@/types/INavItem'

defineProps<{
  data: INavItem
}>()
</script>
<template>
  <li :class="{ checked: data.isChecked }">
    <SvgIcon class="icon" :class="data.type" :name="data.iconName || 'list'" />
    <span class="item-title">{{ data.name }}</span>
    <span v-if="data.count" class="todo-num">{{ data.count }}</span>
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
