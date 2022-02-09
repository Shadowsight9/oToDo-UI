<script setup lang="ts">
import {
  MenuSearchBar,
  MenuProfile,
  MenuFooter,
  NavItem,
  NavGroup,
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
    checked: true,
  },
  {
    type: 'important-todo',
    title: '重要',
    checked: false,
  },
  {
    type: 'in-plan',
    title: '计划内',
    checked: false,
  },
  {
    type: 'assign-to-me',
    title: '已分配给我',
    checked: false,
  },
  {
    type: 'task-todo',
    title: '任务',
    checked: false,
  },
  {
    title: '测试用组',
    data: [
      {
        type: 'todo-list',
        title: '组内列表1',
        checked: true,
        num: 10,
      },
      {
        type: 'todo-list',
        title: '组内列表2',
        checked: false,
        num: 10,
      },
      {
        type: 'todo-list',
        title: '组内列表3',
        checked: false,
        num: 10,
      },
    ],
  },
])

const clearClick = (dataRef = menuData.value) => {
  dataRef.forEach((obj) => {
    if (obj?.data) {
      clearClick(obj.data)
    } else {
      obj.checked = false
    }
  })
}

const clickHandler = (
  childrenIndex: number,
  parentIndex?: number,
  dataRef = menuData.value
) => {
  if (parentIndex) {
    clickHandler(childrenIndex, undefined, dataRef[parentIndex].data)
  } else {
    // TODO: 改变MainBoard内容
    clearClick()

    dataRef[childrenIndex].checked = true
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
            <NavGroup
              v-if="item?.data"
              :title="item.title"
              :data="item.data"
              :parent-index="index"
              @click="clickHandler"
            />
            <NavItem
              v-else
              :type="item.type"
              :title="item.title"
              :is-checked="item.checked"
              @click="clickHandler(index)"
            />
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
