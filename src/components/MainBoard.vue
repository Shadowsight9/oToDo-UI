<script setup lang="ts">
import SvgIcon from '../SvgIcon.vue'
</script>
<template>
  <div class="main-board">
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
    <main class="todo-list">
      <ul>
        <li class="todo-item">
          <SvgIcon class="icon todo-is-completed" name="check"></SvgIcon>
          <div class="todo-text">
            <div class="todo-text_target">学习Rust和Go</div>
            <div class="todo-text_class">任务</div>
          </div>
          <SvgIcon class="icon make important" name="star"></SvgIcon>
        </li>
      </ul>
    </main>
    <div class="add-todo">add-todo</div>
  </div>
</template>
<style lang="scss">
.main-board {
  background-image: url(../../assets/background-image.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    width: 90%;
  }
  .board-header {
    flex: 0 0 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: white;
    .header-title {
      p,
      h1 {
        margin: 0.2em 0;
      }
    }
    .header-button-group {
      .icon {
        width: 25px;
        height: 25px;
        margin: 5px;
        padding: 5px;
        border-radius: 4px;
        &:hover {
          background-color: gold;
        }
      }
    }
  }
  .todo-list {
    flex: 1 1 800px;
    ul {
      margin: 0;
      padding: 0;
      li {
        display: inline-flex;
        align-items: center;
        height: 60px;
        width: 100%;
        background-color: #f6f6f6;
        border-radius: 4px;
        & > * {
          margin: 0 10px;
        }
        .icon {
          padding: 2px;
          height: 24px;
          width: 24px;
          flex-grow: 0;
          flex-shrink: 0;
          color: #626262;
        }
        .todo-is-completed {
          border: #626262 solid 2px;
          border-radius: 50%;
          color: #fff;
          &:hover {
            color: #626262;
          }
        }
        .todo-text {
          flex: 1 1 100%;

          .todo-text_target {
            font-size: 1em;
          }

          .todo-text_class {
            font-size: 0.8em;
            color: #626262;
            margin-top: 2px;
          }
        }
        .make-important {
        }
      }
    }
  }
  .add-todo {
    background-color: brown;
    flex: 0 0 60px;
  }
}
</style>
