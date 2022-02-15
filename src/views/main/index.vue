<script lang="ts" setup>
import NavMenu from '@/components/NavMenu.vue'
import MainBoard from '@/components/MainBoard.vue'
import { INavItem, INavFolder } from '@/types/INavItem'
import { ref } from 'vue'

import { getTodoByListId } from '@/apis/todo'
import { ITodoItem } from '@/types/ITodoItem'

const menuData = ref<(INavItem | INavFolder)[]>([
  {
    title: '测试用组',
    itemArray: [
      {
        id: 'gfdsafdasfdasfdas',
        type: 'todo-list',
        title: '组内列表1',
        isChecked: false,
        todoNum: 10,
      },
      {
        type: 'todo-list',
        title: '组内列表2',
        isChecked: false,
        todoNum: 10,
      },
      {
        type: 'todo-list',
        title: '组内列表3',
        isChecked: false,
        todoNum: 10,
      },
    ],
  },
  {
    type: 'todo-list',
    title: '列表1',
    isChecked: false,
    todoNum: 10,
  },
  {
    type: 'todo-list',
    title: '列表2',
    isChecked: false,
    todoNum: 10,
  },
  {
    type: 'todo-list',
    title: '列表3',
    isChecked: false,
    todoNum: 10,
  },
  {
    type: 'todo-list',
    title: '列表4',
    isChecked: false,
    todoNum: 10,
  },
])

const todoData = ref<ITodoItem[]>()

function handleNavChange(todoListId?: string) {
  if (todoListId) {
    getTodoByListId(todoListId).then((resolve) => {})
  }
}
</script>
<template>
  <NavMenu :data="menuData" @nav-change="handleNavChange"></NavMenu>
  <MainBoard></MainBoard>
  <!-- <div class="suggestions">[suggestions]</div> -->
</template>
<style lang="scss">
#app {
  display: flex;
  height: 100vh;
  width: 100vw;
  user-select: none;
  > * {
    height: 100vh;
  }
  > :nth-child(1) {
    flex: 1 0 260px;
  }
  > :nth-child(2) {
    flex: 4 4 1200px;
    min-width: 250px;
  }
  > :nth-child(3) {
    flex: 1 1 320px;
  }
}
</style>
