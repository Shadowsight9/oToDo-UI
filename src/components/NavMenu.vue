<script setup lang="ts">
import {
  MenuSearchBar,
  MenuProfile,
  MenuFooter,
  NavItem,
  NavFolder,
} from '@/components/LeftMenu'
import { INavItem, INavFolder, ItemType } from '@/types/INavItem'
import { ref, computed } from 'vue'

const props = defineProps<{
  data: (INavItem | INavFolder)[]
}>()

const fixedMenuData = ref<(INavItem | INavFolder)[]>([
  {
    id: '1',
    type: 'my-day',
    title: '我的一天',
    isChecked: true,
    todoNum: 0,
  },
  {
    id: '2',
    type: 'important-todo',
    title: '重要',
    isChecked: false,
    todoNum: 0,
  },
  {
    id: '3',
    type: 'in-plan',
    title: '计划内',
    isChecked: false,
    todoNum: 0,
  },
  {
    id: '4',
    type: 'assign-to-me',
    title: '已分配给我',
    isChecked: false,
    todoNum: 0,
  },
  {
    id: '894edbaf-23f6-4d4d-85e6-80ff57ac57ff',
    type: 'task-todo',
    title: '任务',
    isChecked: false,
    todoNum: 0,
  },
])

const menuData = computed(() => {
  return fixedMenuData.value.concat(props.data)
})

const emit = defineEmits<{
  (e: 'nav-change', todoListType: ItemType, todoListId: string): void
}>()

const clearClick = (dataRef = menuData.value) => {
  dataRef.forEach((obj) => {
    if ('itemArray' in obj) {
      clearClick(obj.itemArray)
    } else if ('isChecked' in obj) {
      obj.isChecked = false
    }
  })
}

const clickHandler = (
  outsideIndex: number,
  innerIndex?: number,
  dataRef: (INavItem | INavFolder)[] = menuData.value
) => {
  if (innerIndex) {
    clickHandler(
      outsideIndex,
      undefined,
      (dataRef[innerIndex] as INavFolder).itemArray
    )
  } else {
    clearClick()
    ;(dataRef[outsideIndex] as INavItem).isChecked = true
    emit('nav-change', dataRef[outsideIndex].type, dataRef[outsideIndex].id)
  }
}

const searchHandler = (value: string) => {
  console.log(value)
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
              v-if="'itemArray' in item"
              :title="item.title"
              :data="item.itemArray || []"
              :parent-index="index"
              @click="clickHandler"
            />
            <NavItem
              v-else-if="'isChecked' in item"
              :data="item"
              @click="clickHandler(index)"
            />
            <hr v-if="index === 4" class="delimiter" />
          </template>
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
