<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'
import TodoItem from '@/components/MainBoard/TodoItem.vue'
import TodoGroup from '@/components/MainBoard/TodoGroup.vue'
import BoardFooter from '@/components/MainBoard/BoardFooter.vue'
import TodoDetail from '@/components/TodoDetail.vue'

import { ref } from 'vue'
import { ITodoItem, ITimeGroup } from '@/types/ITodoItem'
const itemData = ref<ITodoItem>({
  title: 'string',
  isCompleted: true,
  isImportant: false,
  isInMyDay: false,
  belongList: 'string',
  deadline: 0,
  isSync: true,
  haveAttachment: true,
  haveMemo: true,
})

const groupData = ref<ITimeGroup>({
  todoNum: 1,
  isPrevious: true,
  itemArray: [
    {
      title: 'string',
      isCompleted: true,
      isImportant: false,
      isInMyDay: false,
      belongList: 'string',
      deadline: 0,
      isSync: true,
      haveAttachment: true,
      haveMemo: true,
    },
  ],
})
</script>
<template>
  <div class="main-board">
    <div class="board-wrapper">
      <div class="body">
        <header class="board-header">
          <div class="header-title">
            <h1>我的一天</h1>
            <p>2月1日，星期二</p>
          </div>
          <div class="header-button-group">
            <SvgIcon class="icon" name="bulb"></SvgIcon>
            <SvgIcon class="icon" name="settings"></SvgIcon>
          </div>
        </header>
        <ul class="todo-list">
          <TodoItem :data="itemData" />
          <TodoGroup :data="groupData" />
        </ul>
      </div>
      <BoardFooter />
    </div>
    <div class="aside">
      <TodoDetail />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/variables.module.scss';

.main-board {
  display: flex;
  align-items: center;
  & > * {
    height: 100%;
  }
  .board-wrapper {
    flex: 1;
    background-image: url('@/assets/images/background-image.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > * {
      width: 100%;
    }

    .body {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      overflow: scroll;
      > * {
        width: 90%;
      }
      .board-header {
        height: 100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        color: $pure-white;
        .header-title {
          p,
          h1 {
            margin: 0.2em 0;
          }
        }
        .header-button-group {
          .icon {
            width: $icon-size-large;
            height: $icon-size-large;
            margin: 5px;
            padding: 5px;
            border-radius: 4px;
            &:hover {
              background-color: $light-transparency;
            }
          }
        }
      }
      ul.todo-list {
        flex: 1 1 800px;
        margin: 0;
        padding: 0;
      }
    }
  }
  .aside {
    width: 350px;
    height: 100%;
  }
}
</style>
