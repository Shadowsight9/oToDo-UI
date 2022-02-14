<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '提示',
  },
  content: {
    type: String,
    default: '提示内容',
  },
  mountDom: {
    type: HTMLDivElement,
    default: '',
  },
  displayOk: {
    type: Boolean,
    default: true,
  },
  displayCancel: {
    type: Boolean,
    default: true,
  },
})
const emit = defineEmits(['clickOk', 'clickCancel'])

const handleCancel = () => {
  emit('clickCancel')
  props.mountDom.remove()
}
const handleOk = () => {
  emit('clickOk')
  props.mountDom.remove()
}
</script>
<template>
  <div class="my-dialog">
    <div class="wrapper">
      <h1 class="title">{{ title }}</h1>
      <p class="content">{{ content }}</p>
      <div class="button-group">
        <button v-if="displayOk" class="button-ok" @click="handleOk">
          确定
        </button>
        <button
          v-if="displayCancel"
          class="button-cancel"
          @click="handleCancel"
        >
          取消
        </button>
      </div>
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
  align-items: center;
  background-color: $light-transparency;
  .wrapper {
    width: 350px;
    // height: 250px;
    background-color: $light-white;
    box-shadow: 0 2px 6px $light-transparency;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    // justify-content: space-evenly;
    align-items: flex-start;
    padding: 25px;

    h1.title {
      margin: 0;
    }
    p.content {
      font-size: $font-size-large;
      margin: 1em 0;
    }
    div.button-group {
      align-self: center;
      width: 100%;
      margin-top: 30px;
      display: flex;
      justify-content: space-around;
      button {
        width: 40%;
        height: 40px;
        border: 1px solid $slate-gray;
        border-radius: 8px;
        box-shadow: 0 1px 1px $light-transparency;
        background-color: $pure-white;
        font-size: $font-size-large;
      }
      .button-ok {
        background-color: $red;
        color: $pure-white;
      }
    }
  }
}
</style>
