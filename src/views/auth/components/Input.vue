<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: string
    valid: boolean
    loading: boolean
    title: string
    type?: string
    name?: string
    placeholder?: string
  }>(),
  {
    type: 'text',
    name: '',
    placeholder: '',
  }
)

const emit = defineEmits<{
  (event: 'update:modelValue', val: string): void
}>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(val: string) {
    emit('update:modelValue', val)
  },
})
</script>

<template>
  <div class="group-row" :class="{ 'group-wearning': !props.valid }">
    <p>{{ props.title }}</p>

    <input
      v-model="value"
      :type="props.type"
      :name="props.name"
      :disabled="loading"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';

.group-row {
  margin: 20px 0;

  p {
    display: none;
  }

  input {
    display: block;
    width: 100%;
    height: 25px;
    padding: 6px;
    border: 0;
    border-bottom: 1px solid $medium-transparency;
    outline: none;
    font-size: $font-size-large;

    &:hover {
      border-bottom: 1px solid $deep-transparency;
    }
  }
}

.group-wearning {
  p {
    display: unset;
    font-size: $font-size-medium;
    color: $red;
  }

  input,
  input:hover {
    border-bottom: 1.5px solid $red;
  }
}
</style>
