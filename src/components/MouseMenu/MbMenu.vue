<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { PropType } from 'vue'
import { IMenuItem } from '@/types/IMouseMenu'

defineProps({
  data: {
    type: Object as PropType<IMenuItem[]>,
    required: true,
  },
})

const emit = defineEmits(['oclick'])

const clickHandler = (index: number) => {
  emit('oclick', index)
}
</script>
<template>
  <ul>
    <li
      v-for="(item, index) in data"
      :key="index"
      class="pop-item"
      @click.stop="clickHandler(index)"
    >
      <SvgIcon class="icon" :name="item.iconName" />
      <span class="item-text">{{ item.text }}</span>
    </li>
  </ul>
</template>
<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';
ul {
  list-style: none;
  background-color: $pure-white;
  padding: 2px;
  border-radius: 4px;
  box-shadow: 0 2px 6px $light-transparency;
  margin: 5px;
  li {
    display: inline-flex;
    box-sizing: border-box;
    justify-content: left;
    align-items: center;
    padding: 10px;
    width: 100%;
    .icon {
      width: $icon-size-large;
      height: $icon-size-large;
    }
    .item-text {
      margin-left: 5px;
      white-space: nowrap;
    }
    &:hover {
      background-color: $light-white;
    }
  }
}
</style>
