<script lang="ts" setup>
import NavMenu from '@/components/NavMenu.vue'
import MainBoard from '@/components/MainBoard.vue'
import { INavItem, INavFolder, ItemType } from '@/types/INavItem'
import { ref, onMounted, provide } from 'vue'

import { getTodoByListId } from '@/apis/todo'
import { getCurrentUser } from '@/apis/user'
import { ITodoItem } from '@/types/ITodoItem'
import { IUser } from '@/types/IUser'
import { userKey } from '@/store/provideKeys'

const menuData = ref<(INavItem | INavFolder)[]>([
  {
    type: 'todo-folder',
    id: '1',
    title: '测试用组',
    itemArray: [
      {
        id: 'a1',
        type: 'todo-list',
        title: '组内列表1',
        isChecked: false,
        todoNum: 10,
      },
      {
        id: 'a2',
        type: 'todo-list',
        title: '组内列表2',
        isChecked: false,
        todoNum: 10,
      },
      {
        id: 'a3',
        type: 'todo-list',
        title: '组内列表3',
        isChecked: false,
        todoNum: 10,
      },
    ],
  },
])

const todoData = ref<ITodoItem[]>()

const currentListType = ref<ItemType>('my-day')

function handleNavChange(todoListType: ItemType, todoListId: string) {
  getTodoByListId(todoListId).then((resolve) => {
    console.log(resolve)
  })
  currentListType.value = todoListType
}

const user = ref<IUser>()

onMounted(() => {
  getCurrentUser().then((resolve) => {
    user.value = resolve
  })
})

provide(userKey, user)
</script>
<template>
  <NavMenu :data="menuData" @nav-change="handleNavChange"></NavMenu>
  <MainBoard
    :type="currentListType"
    :item-data="[]"
    :group-data="[]"
  ></MainBoard>
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
