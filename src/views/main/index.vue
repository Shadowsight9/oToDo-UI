<script lang="ts" setup>
import LeftMenu from './left-menu/LeftMenu.vue'
import MainBoard from './main-board/MainBoard.vue'
</script>
<template>
  <LeftMenu></LeftMenu>
  <MainBoard></MainBoard>
  <div class="suggestions">[suggestions]</div>
</template>
<style lang="scss">
#app {
  display: flex;
  height: 100vh;
  width: 100vw;
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
