<script setup lang="ts">
const props = defineProps<{
  title: string
  event: string
}>()

const emit = defineEmits<{
  (event: 'click'): void
}>()
</script>

<template>
  <p class="olink">
    {{ props.title }} <a @click="emit('click')">{{ props.event }}</a>
  </p>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';

.olink {
  font-size: $font-size-medium;
  margin: 0;

  a {
    color: $royal-blue;

    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: $slate-gray;
    }
  }
}
</style>
