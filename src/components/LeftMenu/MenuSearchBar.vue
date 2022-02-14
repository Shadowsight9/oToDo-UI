<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { ref } from 'vue'
// const props = defineProps({
//   modelValue: {
//     type: String,
//     default: '',
//   },
// })
const text = ref('')
const emit = defineEmits(['search'])
</script>
<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Search"
      @input="text = ($event.target as HTMLInputElement).value"
      @keyup.enter="emit('search', text)"
    />
    <SvgIcon class="icon" name="search" @click="emit('search', text)" />
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';
div.search-bar {
  height: 35px;
  width: 85%;
  display: flex;
  align-items: center;
  background-color: $menu-searchbar-background-default;
  border: 1px solid $menu-searchbar-border;
  border-bottom: 2px solid $slate-gray;
  border-radius: 4px;
  &:hover {
    background-color: $menu-searchbar-background-hover;
  }
  input {
    margin-left: 10px;
    height: 100%;
    width: 80%;
    background-color: transparent;
    font-size: $font-size-medium;
    border: 0;
    outline: none;
  }

  .icon {
    height: $icon-size-medium;
    width: $icon-size-medium;
    padding: 4px;
    margin-right: 6px;
    border-radius: 4px;
    &:hover {
      background-color: $menu-searchbar-button-hover;
    }
  }
}
</style>
