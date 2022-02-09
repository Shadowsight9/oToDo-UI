<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { ref } from 'vue'
const inputStr = ref('')
</script>
<template>
  <footer class="footer">
    <div class="add-todo">
      <div id="icon" name="check"></div>
      <input v-model="inputStr" class="add-todo-input" type="text" />
      <div v-show="inputStr" class="selector">
        <div class="list-selector">
          <SvgIcon class="icon list" name="list"></SvgIcon>
          <span class="list-text">{{}}</span>
        </div>
        <div class="calender-selector">
          <SvgIcon class="icon calender" name="calendar"></SvgIcon>
          <span class="calender-text">{{}}</span>
        </div>
        <div class="loop-selector">
          <SvgIcon class="icon loop" name="loop"></SvgIcon>
          <span class="loop-text">{{}}</span>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';
.footer {
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: center;
  .add-todo {
    display: flex;
    width: 90%;
    height: 60px;
    border-radius: 4px;
    background-color: rgba($color: $deep-white, $alpha: 0.85);
    align-items: center;
    &:hover {
      background-color: rgba($color: $deep-white, $alpha: 0.9);
    }
    #icon {
      display: unset;
      margin: 0 20px;
      padding: 0;
      width: 24px;
      height: 24px;
      border: 2px solid $slate-gray;
      border-radius: 100%;
    }
    .add-todo-input {
      box-sizing: border-box;
      height: 100%;
      width: 100px;
      flex: 1 1;
      border: 0;
      outline: none;
      font-size: $font-size-xlarge;
      background: transparent;
    }
    div.selector {
      display: flex;
      height: 100%;
      div {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 5px;
        border-radius: 4px;
        overflow: hidden;
        span {
          overflow: hidden;
        }

        .icon {
          border: unset;
          width: $icon-size-large;
          height: $icon-size-large;
          margin: 0;
          color: $medium-transparency;
        }
        &:hover {
          background-color: $deep-white;
        }
      }
    }
  }
}
</style>
