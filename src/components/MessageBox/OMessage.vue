<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'

const props = defineProps({
  content: {
    type: String,
    default: '提示内容',
  },
  mountDom: {
    type: HTMLDivElement,
    default: '',
  },
})

const handleX = () => {
  props.mountDom.remove()
}
</script>

<template>
  <div class="my-dialog">
    <div class="wrapper">
      <p class="content">{{ content }}</p>
      <SvgIcon class="icon" name="close" @click="handleX"></SvgIcon>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';
.my-dialog {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: transparent;
  .wrapper {
    min-width: 300px;
    margin-top: 30px;
    background-color: $light-white;
    box-shadow: 0 2px 6px $light-transparency;
    border-radius: 8px;
    padding: 0 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p.content {
      font-size: $font-size-large;
    }
    .icon {
      width: $font-size-xxlarge;
      height: $font-size-xxlarge;
      cursor: pointer;
    }
  }
}
</style>
