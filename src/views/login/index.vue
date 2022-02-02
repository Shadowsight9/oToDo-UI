<script setup lang="ts">
import oToDoLogo from '@/assets/images/oToDo-logo.jpg'
import { ref } from 'vue'
const isLogin = ref(true)

function changeMode() {
  isLogin.value = !isLogin.value
}
</script>
<template>
  <div class="wrapper">
    <form v-if="isLogin" class="login-box">
      <img :src="oToDoLogo" alt="oToDo-logo" />
      <h1>oToDo Login</h1>
      <div class="input-wrapper">
        <input
          id="usrname"
          type="text"
          name="usrname"
          placeholder="电子邮件、电话或 Skype"
        />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="密码"
        />
      </div>
      <p>没有账户？<a @click="changeMode()">创建一个</a></p>
      <div class="buttons"><input type="submit" value="登录" /></div>
    </form>
    <form v-else class="register-box">
      <img :src="oToDoLogo" alt="oToDo-logo" />
      <h1>oToDo Register</h1>

      <input
        id="usrname"
        type="text"
        name="usrname"
        placeholder="电子邮件、电话或skype"
      />
      <input id="password" type="password" name="password" placeholder="密码" />
      <input type="password" name="password-confirm" placeholder="确认密码" />

      <p>
        已经有账户了？<a class="change-mode" @click="changeMode()">转去登录</a>
      </p>
      <div class="buttons"><input type="submit" value="注册" /></div>
    </form>
  </div>
</template>
<style scoped lang="scss">
.wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #a8cecf, #e6ae8c);
  .login-box,
  .register-box {
    min-height: 330px;
    max-width: 380px;
    width: calc(100% - 40px);
    padding: 44px;
    background-color: #fff;
    box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
    img {
      height: 80px;
      object-fit: contain;
    }
    h1 {
      margin: 10px 0;
      font-size: 20px;
    }
    input {
      display: block;
      width: 100%;
      height: 36px;
      outline: none;
      border: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.6);
      margin: 10px 0;
      padding: 6px 0;
      font-size: 16px;
      &:hover {
        border-bottom: 1px solid rgba(0, 0, 0, 0.8);
      }
    }
    p {
      font-size: 14px;
      a {
        color: #0067b8;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
          color: #666;
        }
        &:active {
          transform: scale(0.7);
        }
      }
    }
    .buttons {
      input {
        background-color: #0067b8;
        color: #fff;
        height: 36px;
        width: 100px;
        position: relative;
        float: right;
        &:hover {
          background-color: #005da6;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
