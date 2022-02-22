<script setup lang="ts">
const props = defineProps<{
  title: string
  loading: boolean
}>()
</script>

<template>
  <div class="wrapper">
    <form class="login-box">
      <img
        class="img-loading"
        :class="{ hidden: props.loading }"
        src="@/assets/images/logging-in.gif"
        alt="logging-in"
      />

      <img
        class="img-logo"
        src="@/assets/images/oToDo-logo.jpg"
        alt="oToDo-logo"
      />

      <h1>{{ props.title }}</h1>

      <div class="input-group">
        <slot></slot>
      </div>

      <slot name="footer"></slot>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';

.wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $login-background;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $login-from-background;
    max-width: 380px;
    width: calc(100% - 40px);
    min-height: 330px;
    box-shadow: 0 2px 6px $light-transparency;
    padding: 0 40px;

    @media (max-width: 768px) {
      height: 100%;
      width: 100vw;
    }

    .img-loading {
      width: calc(100% + 80px);
      visibility: hidden;
    }

    .hidden {
      visibility: unset;
    }

    .img-logo {
      height: 80px;
      width: min-content;
      object-fit: contain;
      margin-top: 40px;
    }

    h1 {
      margin: 10px 0 0 10px;
      font-size: $font-size-xxlarge;
    }

    .img-logo,
    h1 {
      align-self: flex-start;
    }

    .input-group {
      width: 98%;
    }
  }
}
</style>
