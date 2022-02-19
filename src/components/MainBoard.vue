<script setup lang="ts">
import TodoItem from '@/components/MainBoard/TodoItem.vue'
import TodoGroup from '@/components/MainBoard/TodoGroup.vue'
import BoardFooter from '@/components/MainBoard/BoardFooter.vue'
import BoardHeader from '@/components/MainBoard/BoardHeader.vue'
import TodoDetail from '@/components/TodoDetail.vue'

import { ref, onMounted } from 'vue'
import { ITodoItem, ITimeGroup, ITodoGroup } from '@/types/ITodoItem'
import type { INavItem, ItemType } from '@/types/INavItem'
import { getCurrentBasicTodoList } from '@/apis/todoList'
import { getTodoByListId } from '@/apis/todo'
import { ITodoList } from '@/types/ITodoList'

const itemData = ref<ITodoItem[]>([
  {
    id: 1,
    title: '测试List1',
    isCompleted: true,
    isImportant: false,
    isInMyDay: false,
    deadline: '',
    isSync: true,
    haveAttachment: true,
    haveMemo: true,
  },
  {
    id: 2,
    title: '测试List2',
    isCompleted: false,
    isImportant: false,
    isInMyDay: false,
    deadline: '',
    isSync: true,
    haveAttachment: true,
    haveMemo: true,
  },
])

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

const fetchListData = async (todoListID: string, todoListType: ItemType) => {
  try {
    let resList: ITodoList
    let todoListID: number
    switch (todoListType) {
      case 'my-day':
        resList = await getCurrentBasicTodoList()
        todoListID = resList.id
        const resTodos = await getTodoByListId(todoListID)
        return
      default:
        return
    }
  } catch {}
}

onMounted(() => {})
</script>
<template>
  <div class="main-board">
    <div class="board-wrapper">
      <div class="body">
        <BoardHeader
          :type="todoList.type"
          :icon-name="todoList.iconName"
          :title="todoList.title"
        />
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
