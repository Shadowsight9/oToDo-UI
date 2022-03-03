<script setup lang="ts">
import {
  MenuSearchBar,
  MenuProfile,
  MenuFooter,
  NavItem,
  NavFolder,
} from '@/components/LeftMenu'
import { INavItem } from '@/types/INavItem'
import { computed } from 'vue'
import { fixedMenuData } from '@/types/INavItem'
import { useDataStore } from '@/store/dataStore'

const dataStore = useDataStore()

const menuData = computed(() => {
  return fixedMenuData.value.concat(dataStore.navData)
})

const emit = defineEmits<{
  (e: 'nav-change', todoList: INavItem): void
}>()

const clearClick = (dataRef = menuData.value) => {
  dataRef.forEach((obj) => {
    if (!obj.isLeaf) {
      clearClick(obj.children)
    } else {
      obj.isChecked = false
    }
  })
}

const clickHandler = (
  outsideIndex: number,
  innerIndex?: number,
  dataRef: INavItem[] = menuData.value
) => {
  if (innerIndex) {
    clickHandler(outsideIndex, undefined, dataRef[innerIndex].children)
  } else {
    clearClick()
    dataRef[outsideIndex].isChecked = true
    emit('nav-change', dataRef[outsideIndex])
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
              v-if="!item.isLeaf"
              :title="item.name"
              :data="item.children || []"
              :parent-index="index"
              @click="clickHandler"
            />
            <NavItem v-else :data="item" @click="clickHandler(index)" />
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
