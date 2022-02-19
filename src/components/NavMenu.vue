<script setup lang="ts">
import {
  MenuSearchBar,
  MenuProfile,
  MenuFooter,
  NavItem,
  NavFolder,
} from '@/components/LeftMenu'
import { INavItem, INavFolder } from '@/types/INavItem'
import { computed } from 'vue'
import { fixedMenuData } from '@/types/INavItem'

type TNav = INavItem | INavFolder

const props = defineProps<{
  data: TNav[]
}>()

const menuData = computed(() => {
  return (fixedMenuData.value as TNav[]).concat(props.data)
})

const emit = defineEmits<{
  (e: 'nav-change', todoList: INavItem): void
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
    const insideItem = dataRef[innerIndex] as INavFolder
    clickHandler(outsideIndex, undefined, insideItem.itemArray)
  } else {
    const outsideItem = dataRef[outsideIndex] as INavItem
    clearClick()
    outsideItem.isChecked = true
    emit('nav-change', outsideItem)
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
          <template v-for="(item, index) in menuData" :key="item.id">
            <NavFolder
              v-if="'itemArray' in item"
              :title="item.name"
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
