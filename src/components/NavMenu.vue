<script setup lang="ts">
import {
  MenuSearchBar,
  MenuProfile,
  MenuFooter,
  NavItem,
  NavFolder,
} from '@/components/menu'
import { INavItem } from '@/types/INavItem'

import { ref } from 'vue'

const searchHandler = (value: string) => {
  console.log(value)
}

const menuData = ref<INavItem[]>([
  {
    type: 'my-day',
    title: '我的一天',
    isChecked: true,
  },
  {
    type: 'important-todo',
    title: '重要',
    isChecked: false,
  },
  {
    type: 'in-plan',
    title: '计划内',
    isChecked: false,
  },
  {
    type: 'assign-to-me',
    title: '已分配给我',
    isChecked: false,
  },
  {
    type: 'task-todo',
    title: '任务',
    isChecked: false,
  },
  {
    title: '测试用组',
    itemArray: [
      {
        type: 'todo-list',
        title: '组内列表1',
        isChecked: true,
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
])

const clearClick = (dataRef = menuData.value) => {
  dataRef.forEach((obj) => {
    if (obj?.itemArray) {
      clearClick(obj.itemArray)
    } else {
      obj.isChecked = false
    }
  })
}

const clickHandler = (
  childrenIndex: number,
  parentIndex?: number,
  dataRef = menuData.value
) => {
  if (parentIndex) {
    clickHandler(childrenIndex, undefined, dataRef[parentIndex].itemArray)
  } else {
    // TODO: 改变MainBoard内容
    clearClick()

    dataRef[childrenIndex].isChecked = true
  }
}
</script>
<template>
  <aside class="menu-wrapper">
    <div class="body">
      <MenuProfile />

      <MenuSearchBar @search="searchHandler" />

      <nav class="nav-menu">
        <ul>
          <template v-for="(item, index) in menuData" :key="index">
            <NavFolder
              v-if="item?.itemArray"
              :title="item.title"
              :data="item.itemArray"
              :parent-index="index"
              @click="clickHandler"
            />
            <NavItem v-else :data="item" @click="clickHandler(index)" />
          </template>

          <hr class="delimiter" />
        </ul>
      </nav>
    </div>

    <MenuFooter />
  </aside>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/variables.module.scss';
.menu-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $menu-background;
  > * {
    width: 100%;
  }
  color: $font-color-normal;
}
.body {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  > * {
    width: 100%;
  }

  .nav-menu {
    ul {
      padding: 0;
      margin: 0 10px;
      margin-top: 10px;
      .delimiter {
        border: none;
        background-color: $menu-line;
        height: 1px;
        width: 95%;
        margin: 5px;
      }
    }
  }
}
</style>
