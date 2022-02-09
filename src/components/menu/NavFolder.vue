<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import NavItem from '@/components/menu/NavItem.vue'
import { ref, PropType } from 'vue'
import { INavItem } from '@/types/INavItem'

defineProps({
  title: {
    type: String,
    default: '无标题组',
  },
  data: {
    type: Object as PropType<INavItem[]>,
    required: true,
  },
  parentIndex: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['click'])
const isExpand = ref(true)

const clickHandler = () => {
  isExpand.value = !isExpand.value
}
</script>
<template>
  <li @click="clickHandler">
    <SvgIcon class="icon" name="group" />
    <span class="item-title"> {{ title }}</span>
    <SvgIcon class="icon" name="down-arrow" />
  </li>
  <NavItem
    v-for="(item, index) in data"
    v-show="isExpand"
    :key="index"
    class="todo-group-list"
    :data="item"
    @click="emit('click', index, parentIndex)"
  />
</template>
<style scoped lang="scss">
@import '@/assets/styles/menu.item.scss';
.todo-group-list {
  padding-left: 30px;
  width: calc(100% - 30px);
}
</style>
