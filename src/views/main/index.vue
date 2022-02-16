<script lang="ts" setup>
import { ref, onMounted, provide } from 'vue'
import NavMenu from '@/components/NavMenu.vue'
import MainBoard from '@/components/MainBoard.vue'
import { OpenMessage } from '@/utils/openComponents'
import { getCurrentUser } from '@/apis/user'
import { INavItem, INavFolder, fixedMenuData } from '@/types/INavItem'
import { IUser } from '@/types/IUser'
import { userKey } from '@/store/provideKeys'

const user = ref<IUser>()
const currentNavItem = ref<INavItem>(fixedMenuData.value[0])
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

function handleNavChange(navItem: INavItem) {
  currentNavItem.value = navItem
}

onMounted(async () => {
  try {
    user.value = await getCurrentUser()
  } catch (err) {
    OpenMessage('获取用户错误', 2)
  }
})
provide(userKey, user)
</script>
<template>
  <NavMenu :data="menuData" @nav-change="handleNavChange"></NavMenu>
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
