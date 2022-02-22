<script setup lang="ts">
const props = defineProps<{
  title: string
  loading: boolean
}>()

const emit = defineEmits(['click'])
</script>

<template>
  <input
    type="submit"
    :value="props.title"
    :disabled="props.loading"
    @click.prevent="emit('click')"
  />
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';

input {
  background-color: $royal-blue;
  color: $pure-white;
  height: 36px;
  width: 100px;
  margin: 0 10px;
  border: 0;
  float: right;

  &:hover {
    background-color: $dark-blue;
    cursor: pointer;
  }

  &:disabled {
    background-color: $light-gray;
    color: $slate-gray;
    cursor: wait;
  }
}
</style>
