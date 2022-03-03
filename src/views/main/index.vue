<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import NavMenu from '@/views/main/components/NavMenu.vue'
import MainBoard from '@/views/main/components/MainBoard.vue'
import { OpenMessage } from '@/utils/openComponents'
import { getCurrentUser } from '@/apis/user'
import { getCurrentMenu } from '@/apis/menu'
import { getCurrentFixedTodos } from '@/apis/todo'
import { INavItem, fixedMenuData } from '@/types/INavItem'
import { useDataStore } from '@/store/dataStore'
import { getCurrentTodoList } from '@/apis/todoList'

const s = useDataStore()
const currentNavItem = ref<INavItem>(fixedMenuData.value[0])

function handleNavChange(navItem: INavItem) {
  currentNavItem.value = navItem
}

onMounted(async () => {
  const f = async (fn: () => Promise<void>) => {
    try {
      await fn()
    } catch (err) {
      OpenMessage('请求服务器信息失败！', 2)
    }
  }

  await Promise.allSettled([
    f(async () => s.setUser(await getCurrentUser())),
    f(async () => s.setNavTree(await getCurrentMenu())),
    f(async () => s.setTodoList(await getCurrentTodoList())),
    f(async () => s.setFixedTodo(await getCurrentFixedTodos())),
  ])
})
</script>
<template>
  <NavMenu @nav-change="handleNavChange"></NavMenu>
  <MainBoard :todo-list="currentNavItem"></MainBoard>
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
