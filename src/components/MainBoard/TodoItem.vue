<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { PropType } from 'vue'
import { ITodoItem } from '@/types/ITodoItem'
defineProps({
  data: {
    type: Object as PropType<ITodoItem>,
    required: true,
  },
})
</script>
<template>
  <li class="todo-item">
    <SvgIcon
      class="icon tick"
      :class="{ 'tick-completed': data.isCompleted }"
      name="check"
    />
    <div class="todo-info">
      <div
        class="todo-text"
        :class="{ 'todo-text-completed': data.isCompleted }"
      >
        {{ data.title }}
      </div>
      <div class="todo-detail">
        <template v-if="data.isInMyDay">
          <SvgIcon class="icon" name="sun" />
          <span>我的一天</span>
          <span>•</span>
        </template>
        <template v-if="data.belongList">
          <SvgIcon class="icon" name="list" />
          <span>{{ data.belongList }}</span>
          <span>•</span>
        </template>
        <template v-if="data.deadline">
          <SvgIcon class="icon calendar" name="calendar" />
          <span>2月19日，周六</span>
          <span>•</span>
        </template>
        <template v-if="data.isSync">
          <SvgIcon class="icon loop" name="loop" />
          <span>•</span>
        </template>
        <template v-if="data.haveAttachment">
          <SvgIcon class="icon loop" name="paperclip" />
          <span>•</span>
        </template>
        <template v-if="data.haveMemo">
          <SvgIcon class="icon loop" name="note" />
          <span>•</span>
        </template>
      </div>
    </div>

    <SvgIcon v-if="data.isImportant" class="icon" name="star-solid" />
    <SvgIcon v-else class="icon" name="star" />
  </li>
</template>
<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';
li.todo-item {
  display: inline-flex;
  align-items: center;
  height: 60px;
  width: 100%;
  margin-bottom: 10px;
  background-color: rgba($color: $deep-white, $alpha: 0.9);
  border-radius: 4px;
  &:hover {
    background-color: rgba($color: $deep-white, $alpha: 1);
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
    color: $slate-gray;
  }
  .tick {
    height: 18px;
    width: 18px;
    border: $slate-gray solid 2px;
    border-radius: 100%;
    color: $deep-white;
    &:hover {
      color: $slate-gray;
    }
  }
  .tick-completed {
    color: $slate-gray;
  }
  .todo-info {
    flex: 1 1 100%;
    .todo-text {
      font-size: 1em;
    }
    .todo-text-completed {
      color: $slate-gray;
      text-decoration: line-through;
    }
    .todo-detail {
      font-size: 0.8em;
      color: $slate-gray;
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
        &:last-child {
          display: none;
        }
      }
    }
  }
}
</style>
