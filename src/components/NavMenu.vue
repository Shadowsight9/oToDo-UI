<script setup lang="ts">
import {
  MenuSearchBar,
  MenuProfile,
  MenuFooter,
  NavItem,
  NavFolder,
} from '@/components/LeftMenu'
import { INavItem, INavFolder } from '@/types/INavItem'

import { ref, PropType, computed } from 'vue'

const props = defineProps({
  data: {
    type: Object as PropType<(INavItem | INavFolder)[]>,
    required: true,
  },
})

const fixedMenuData = ref<(INavItem | INavFolder)[]>([
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
])

const menuData = computed(() => {
  return fixedMenuData.value.concat(props.data)
})

const emit = defineEmits<{
  (e: 'nav-change', todoListId?: string): void
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
  } else if ('id' in dataRef[outsideIndex]) {
    clearClick()
    ;(dataRef[outsideIndex] as INavItem).isChecked = true
    emit('nav-change', (dataRef[outsideIndex] as INavItem).id)
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
