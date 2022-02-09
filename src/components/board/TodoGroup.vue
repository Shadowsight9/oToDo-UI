<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import TodoItem from '@/components/board/TodoItem.vue'
import { ICompletedGroup, ITimeGroup, IListGroup } from '@/types/ITodoItem'
import { PropType, ref } from 'vue'
defineProps({
  data: {
    type: Object as PropType<ICompletedGroup | ITimeGroup | IListGroup>,
    required: true,
  },
})

const isExpand = ref(true)
const clickHandler = () => {
  isExpand.value = !isExpand.value
}
</script>
<template>
  <li class="divider" @click="clickHandler">
    <SvgIcon class="icon arrow" name="down-arrow" />
    <template v-if="'listName' in data">
      <span>{{ data.listName }}</span>
    </template>
    <template v-else-if="'isPrevious' in data">
      <span>{{ data.isPrevious ? '先前' : '稍后' }}</span>
    </template>
    <template v-else-if="'isCompleted' in data">
      <span>{{ data.isCompleted ? '已完成' : '未完成' }}</span>
    </template>
    <span>{{ data.todoNum }}</span>
  </li>

  <TodoItem
    v-for="(v, index) in data.itemArray"
    v-show="isExpand"
    :key="index"
    :data="v"
  />
</template>
<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';
li.divider {
  display: inline-flex;
  align-items: center;
  height: 40px;
  margin-bottom: 10px;
  background-color: rgba($color: $deep-white, $alpha: 0.9);
  border-radius: 4px;
  & > * {
    margin: 0 5px;
  }
  .icon {
    height: 16px;
    width: 16px;
  }
  &:hover {
    background-color: rgba($color: $deep-white, $alpha: 1);
  }
}
</style>
