<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'
</script>
<template>
  <div class="main-board">
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
        <li class="todo-item">
          <SvgIcon class="icon todo-is-completed" name="check"></SvgIcon>
          <div class="todo-info">
            <div class="todo-text">学习Rust和Go</div>
            <div class="todo-detail">
              <SvgIcon class="icon belong-list" name="list"></SvgIcon>
              <span class="belong-list">任务</span>
              <span>•</span>
              <SvgIcon class="icon calendar" name="calendar"></SvgIcon>
              <span class="calendar">2月19日，周六</span>
              <span>•</span>
              <SvgIcon class="icon loop" name="loop"></SvgIcon>
            </div>
          </div>
          <SvgIcon class="icon make-important" name="star"></SvgIcon>
        </li>
        <li class="divider">
          <SvgIcon class="icon arrow" name="down-arrow"></SvgIcon>
          <SvgIcon class="icon" name="list"></SvgIcon>
          <span>未命名列表</span>
        </li>
      </ul>
    </div>
    <footer class="footer">
      <div class="add-todo">
        <div id="icon" name="check"></div>
        <input class="add-todo-input" type="text" />
        <div class="list-selector">
          <SvgIcon class="icon list" name="list"></SvgIcon>
          <span class="list-text">无标题列表</span>
        </div>
        <div class="calender-selector">
          <SvgIcon class="icon calender" name="calendar"></SvgIcon>
          <span class="calender-text">2月19日，周六</span>
        </div>
        <div class="loop-selector">
          <SvgIcon class="icon loop" name="loop"></SvgIcon>
          <span class="loop-text">工作日</span>
        </div>
      </div>
    </footer>
  </div>
</template>
<style lang="scss">
.main-board {
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
    ul.todo-list {
      flex: 1 1 800px;
      margin: 0;
      padding: 0;

      li.todo-item {
        display: inline-flex;
        align-items: center;
        height: 60px;
        width: 100%;
        margin-bottom: 10px;
        background-color: rgba($color: #f6f6f6, $alpha: 0.9);
        border-radius: 4px;
        &:hover {
          background-color: rgba($color: #f6f6f6, $alpha: 1);
        }
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
          height: 18px;
          width: 18px;
          border: #626262 solid 2px;
          border-radius: 100%;
          color: #f6f6f6;
          &:hover {
            color: #626262;
          }
        }
        .make-important {
        }
        .todo-info {
          flex: 1 1 100%;
          .todo-text {
            font-size: 1em;
          }
          .todo-detail {
            font-size: 0.8em;
            color: #626262;
            margin-top: 3px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            .icon {
              height: 16px;
              width: 16px;
            }
            span {
              margin: 0 4px;
            }
          }
        }
      }
      li.divider {
        display: inline-flex;
        align-items: center;
        height: 40px;
        margin-bottom: 10px;
        background-color: rgba($color: #f6f6f6, $alpha: 0.9);
        border-radius: 4px;
        & > * {
          margin: 0 5px;
        }
        .icon {
          height: 16px;
          width: 16px;
        }
        &:hover {
          background-color: rgba($color: #f6f6f6, $alpha: 1);
        }
      }
    }
  }

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
      background-color: rgba($color: #f6f6f6, $alpha: 0.85);
      align-items: center;
      &:hover {
        background-color: rgba($color: #f6f6f6, $alpha: 0.9);
      }
      #icon {
        display: unset;
        margin: 0 20px;
        padding: 0;
        width: 24px;
        height: 24px;
        border: 2px solid #626262;
        border-radius: 100%;
      }
      .add-todo-input {
        box-sizing: border-box;
        height: 100%;
        width: 100px;
        flex: 1 1 200px;
        border: 0;
        outline: none;
        font-size: larger;
        background: transparent;
      }
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

        // display: none;
        .icon {
          border: unset;
          width: 24px;
          height: 24px;
          margin: 0;
        }
        &:hover {
          background-color: #f6f6f6;
        }
      }
    }
  }
}
</style>
