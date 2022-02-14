<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
</script>
<template>
  <div class="todo-detail">
    <SvgIcon class="icon close" name="close" />
    <ul class="todo-steps">
      <li class="steps-title">
        <SvgIcon class="icon tick" name="check" />
        <input type="text" />
        <SvgIcon class="icon important" name="star" />
      </li>
      <li class="step-item">
        <SvgIcon class="icon tick" name="check" />
        <input type="text" />
        <SvgIcon class="icon delete" name="close" />
      </li>
      <hr class="delimiter" />
      <li class="step-item">
        <SvgIcon class="icon tick" name="check" />
        <input type="text" />
        <SvgIcon class="icon delete" name="close" />
      </li>
    </ul>
    <ul class="item-list">
      <div class="detail-item">
        <SvgIcon class="icon" name="sun" />
        <span>添加到"我的一天"</span>
        <SvgIcon class="icon cancel" name="close" />
      </div>
    </ul>
    <ul class="item-list">
      <div class="detail-item">
        <SvgIcon class="icon" name="alarm" />
        <span>提醒我</span>
        <SvgIcon class="icon cancel" name="close" />
      </div>
      <hr class="delimiter" />
      <div class="detail-item">
        <SvgIcon class="icon" name="calendar" />
        <span>添加截至日期</span>
        <SvgIcon class="icon" name="close" />
      </div>
      <hr class="delimiter" />
      <div class="detail-item">
        <SvgIcon class="icon" name="loop" />
        <span>重复</span>
        <SvgIcon class="icon" name="close" />
      </div>
    </ul>
    <ul class="item-list">
      <div class="detail-item">
        <SvgIcon class="icon" name="paperclip" />
        <span>添加文件</span>
        <SvgIcon class="icon cancel" name="close" />
      </div>
    </ul>
    <textarea cols="30" rows="10"></textarea>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';
.todo-detail {
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: $detail-background;

  & > * {
    width: 95%;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid $detail-border;
    background-color: $detail-content;
    margin: 0;
    margin-bottom: 10px;
    padding: 10px;
  }

  .icon {
    width: $icon-size-large;
    height: $icon-size-large;
  }
  .close {
    align-self: flex-end;
    margin: 10px;
    padding: 0;
    color: $font-color-gray;
    background-color: transparent;
    border: 0;
    &:hover {
      cursor: pointer;
    }
  }
  .delimiter {
    border: none;
    background-color: #e9e9e9;
    height: 1px;
    margin: 2px 10px;
  }
  .todo-steps {
    .steps-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      .tick {
        width: 18px;
        height: 18px;
        padding: 2px;
        color: transparent;
        border: $slate-gray solid 2px;
        border-radius: $circular-border;
        &:hover {
          color: $slate-gray;
        }
      }
      input {
        flex: 1;
        width: 100%;
        margin: 0 10px;
        height: 100%;
        font-size: 1.6rem;
        padding: 0;
        border: 0;
        background-color: transparent;
        outline: none;
      }
    }
    .step-item {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 8px;
      border-radius: 4px;

      &:hover {
        background-color: $menu-background;
      }
      .tick {
        width: 15px;
        height: 15px;
        padding: 2px;
        color: transparent;
        border: $slate-gray solid 2px;
        border-radius: $circular-border;
        &:hover {
          color: $slate-gray;
        }
      }
      .delete {
        color: $font-color-gray;
        &:hover {
          cursor: pointer;
        }
      }
      input {
        flex: 1;
        width: 100%;
        margin: 0 10px;
        height: 100%;
        font-size: 1.2rem;
        padding: 0;
        border: 0;
        background-color: transparent;
        outline: none;
      }
    }
  }

  ul.item-list {
    padding: 0;
    color: $slate-gray;
    box-sizing: border-box;
    .detail-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      height: 60px;
      &:hover {
        background-color: #f7f7f7;
      }
      span {
        flex: 1;
        width: 100%;
      }
      .cancel:hover {
        background-color: #f7f7f7;
      }
      .icon {
        height: 100%;
        padding: 0 10px;
      }
    }
  }
  textarea {
    resize: none;
    font-size: 1.2em;
    outline: none;
  }
}
</style>
