<script setup lang="ts">
import TodoItem from '@/components/MainBoard/TodoItem.vue'
import TodoGroup from '@/components/MainBoard/TodoGroup.vue'
import BoardFooter from '@/components/MainBoard/BoardFooter.vue'
import BoardHeader from '@/components/MainBoard/BoardHeader.vue'
import TodoDetail from '@/components/TodoDetail.vue'

import { ref, onMounted, watch, toRef } from 'vue'
import { ITodoItem, ITimeGroup, ITodoGroup } from '@/types/ITodoItem'
import type { INavItem, ItemType } from '@/types/INavItem'
import { getCurrentDailyTodos } from '@/apis/todo'
import { getTodoByListId } from '@/apis/todo'
import { ITodoList } from '@/types/ITodoList'
import { ITodo } from '@/types/ITodo'
import { useDataStore } from '@/store/dataStore'

const s = useDataStore()
const currentTodos = ref<ITodo[]>()

const groupData = ref<ITimeGroup[]>([
  {
    id: 3,
    todoNum: 1,
    isPrevious: true,
    itemArray: [
      {
        id: 1,
        title: '时间列表',
        isCompleted: false,
        isImportant: false,
        isInMyDay: false,
        deadline: '',
        isSync: true,
        haveAttachment: true,
        haveMemo: true,
      },
    ],
  },
])

const props = defineProps<{
  todoList: INavItem
}>()

const fetchListData = async (todoListID: number, todoListType: ItemType) => {
  switch (todoListType) {
    case 'my-day':
      currentTodos.value = s.fixedTodoData?.dailyListData
      break
    case 'in-plan':
      currentTodos.value = s.fixedTodoData?.plannedListData
      break
    case 'important-todo':
      currentTodos.value = s.fixedTodoData?.importantListData
      break
    case 'task-todo':
      currentTodos.value = s.fixedTodoData?.basicListData
      break
    case 'todo-list':
      currentTodos.value = await getTodoByListId(todoListID)
      break
    default:
      return
  }
}

watch(toRef(props, 'todoList'), (newVal) => {
  fetchListData(newVal.id, newVal.type)
})
</script>
<template>
  <div class="main-board">
    <div class="board-wrapper">
      <div class="body">
        <BoardHeader
          :type="todoList.type"
          :icon-name="todoList.iconName"
          :title="todoList.name"
        />
        <ul class="todo-list">
          <TodoItem v-for="item in currentTodos" :key="item.id" :data="item" />
          <!-- <TodoGroup v-for="item in groupData" :key="item.id" :data="item" /> -->
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
