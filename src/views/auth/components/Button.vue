<script setup lang="ts">
const props = defineProps<{
  title: string
  loading: boolean
}>()

const emit = defineEmits(['click'])
</script>

<template>
  <div class="button-group">
    <input
      type="submit"
      :value="props.title"
      :disabled="props.loading"
      @click.prevent="emit('click')"
    />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';

.button-group {
  margin-top: 10px;
  margin-bottom: 40px;
  align-self: flex-end;

  input {
    background-color: $royal-blue;
    color: $pure-white;
    height: 36px;
    width: 100px;
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
}
</style>
