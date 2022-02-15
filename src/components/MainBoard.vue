<script setup lang="ts">
import TodoItem from '@/components/MainBoard/TodoItem.vue'
import TodoGroup from '@/components/MainBoard/TodoGroup.vue'
import BoardFooter from '@/components/MainBoard/BoardFooter.vue'
import BoardHeader from '@/components/MainBoard/BoardHeader.vue'
import TodoDetail from '@/components/TodoDetail.vue'

import { ref } from 'vue'
import { ITodoItem, ITimeGroup, ITodoGroup } from '@/types/ITodoItem'
import type { ItemType } from '@/types/INavItem'

const itemData = ref<ITodoItem[]>([
  {
    id: '1',
    title: '测试List1',
    isCompleted: true,
    isImportant: false,
    isInMyDay: false,
    belongList: '任务',
    deadline: 0,
    isSync: true,
    haveAttachment: true,
    haveMemo: true,
  },
  {
    id: '2',
    title: '测试List2',
    isCompleted: false,
    isImportant: false,
    isInMyDay: false,
    belongList: '任务',
    deadline: 0,
    isSync: true,
    haveAttachment: true,
    haveMemo: true,
  },
])

const groupData = ref<ITimeGroup[]>([
  {
    id: '3',
    todoNum: 1,
    isPrevious: true,
    itemArray: [
      {
        id: '1',
        title: '时间列表',
        isCompleted: false,
        isImportant: false,
        isInMyDay: false,
        belongList: '任务',
        deadline: 0,
        isSync: true,
        haveAttachment: true,
        haveMemo: true,
      },
    ],
  },
])

const props = defineProps<{
  itemData: ITodoItem[]
  groupData: ITodoGroup[]
  type: ItemType
}>()
</script>
<template>
  <div class="main-board">
    <div class="board-wrapper">
      <div class="body">
        <BoardHeader :type="props.type" />
        <ul class="todo-list">
          <TodoItem v-for="item in itemData" :key="item.id" :data="item" />
          <TodoGroup v-for="item in groupData" :key="item.id" :data="item" />
        </ul>
      </div>
      <BoardFooter />
    </div>
    <div class="aside">
      <TodoDetail />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/variables.module.scss';

.main-board {
  display: flex;
  align-items: center;
  & > * {
    height: 100%;
  }
  .board-wrapper {
    flex: 1;
    background-image: url('@/assets/images/background-image.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > * {
      width: 100%;
    }

    .body {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      overflow: scroll;
      > * {
        width: 90%;
      }

      ul.todo-list {
        flex: 1 1 800px;
        margin: 0;
        padding: 0;
      }
    }
  }
  .aside {
    width: 350px;
    height: 100%;
  }
}
</style>
