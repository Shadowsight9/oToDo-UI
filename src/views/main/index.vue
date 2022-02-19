<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import NavMenu from '@/components/NavMenu.vue'
import MainBoard from '@/components/MainBoard.vue'
import { OpenMessage } from '@/utils/openComponents'
import { getCurrentUser } from '@/apis/user'
import { INavItem, fixedMenuData } from '@/types/INavItem'
import { useDataStore } from '@/store/dataStore'

const currentNavItem = ref<INavItem>(fixedMenuData.value[0])
const menuData = ref<INavItem[]>([
  {
    id: 10,
    name: '测试用文件夹',
    isLeaf: false,
    count: 100,
    children: [
      {
        id: 11,
        name: '组内列表1',
        isLeaf: true,
        count: 10,
        type: 'todo-list',
        isChecked: false,
      },
      {
        id: 12,
        name: '组内列表2',
        isLeaf: true,
        count: 10,
        type: 'todo-list',
        isChecked: false,
      },
      {
        id: 13,
        name: '组内列表3',
        isLeaf: true,
        count: 10,
        type: 'todo-list',
        isChecked: false,
      },
    ],
    type: 'todo-folder',
    iconName: 'floder',
    isChecked: false,
  },
])

function handleNavChange(navItem: INavItem) {
  currentNavItem.value = navItem
}

onMounted(async () => {
  try {
    const user = await getCurrentUser()
    useDataStore().setUser(user)
  } catch (err) {
    OpenMessage('获取用户错误', 2)
  }
})
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
