<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'
</script>
<template>
  <aside class="menu-wrapper">
    <div class="body">
      <div class="profile">
        <div class="profile-avatar" title="黄 铮"></div>
        <div class="profile-account" title="huangzheng@shu.edu.cn">
          <div class="account-name">黄 铮</div>
          <div class="account-email">
            <span> huangzheng@shu.edu.cn </span>
            <SvgIcon class="icon" name="expand"></SvgIcon>
          </div>
        </div>
      </div>
      <div class="search-bar">
        <input type="text" placeholder="Search" />
        <SvgIcon class="icon" name="search"></SvgIcon>
      </div>
      <nav class="nav-menu">
        <ul>
          <li class="checked">
            <SvgIcon class="icon my-day" name="sun"></SvgIcon>
            <span class="menu-text">我的一天</span>
            <span class="todo-num">9</span>
          </li>
          <li class="">
            <SvgIcon class="icon important-todo" name="star"></SvgIcon>
            <span class="menu-text">重要</span>
          </li>
          <li class="">
            <SvgIcon class="icon in-plan" name="plan"></SvgIcon>
            <span class="menu-text">计划内</span>
          </li>
          <li class="">
            <SvgIcon class="icon assign-to-me" name="user"></SvgIcon>
            <span class="menu-text">已分配给我</span>
          </li>
          <li class="">
            <SvgIcon class="icon task-todo" name="home"></SvgIcon>
            <span class="menu-text">任务</span>
          </li>
          <hr class="delimiter" />
          <li class="todo-list">
            <SvgIcon class="icon task-todo" name="list"></SvgIcon>
            <span class="menu-text">无标题列表</span>
          </li>
          <li class="todo-grop">
            <SvgIcon class="icon" name="group"></SvgIcon>
            <span class="menu-text">无标题组</span>
            <SvgIcon class="icon icon-expand" name="down-arrow"></SvgIcon>
          </li>
          <li class="todo-group-list">
            <SvgIcon class="icon task-todo" name="list"></SvgIcon>
            <span class="menu-text">组内列表</span>
          </li>
        </ul>
      </nav>
    </div>
    <div class="footer">
      <div class="new-list">
        <SvgIcon class="icon" name="plus"></SvgIcon>
        <div>新建列表</div>
      </div>
      <div class="new-group">
        <SvgIcon class="icon" name="new-group"></SvgIcon>
      </div>
    </div>
  </aside>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/variables.module.scss';
.menu-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $menu-background;
  > * {
    width: 100%;
  }
  color: $font-color-normal;
}
.body {
  display: flex;
  flex-direction: column;
  height: 100%;
  // 交叉轴居中
  align-items: center;
  overflow: scroll;
  > * {
    width: 100%;
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    > * {
      height: 60px;
    }
    .profile-avatar {
      width: 60px;
      background-color: $light-steel-blue;
      border-radius: $circular-border;
    }
    .profile-account {
      width: 180px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .account-name {
        font-size: $font-size-medium;
        font-weight: bold;
      }
      .account-email {
        font-size: $font-size-small;
        display: inline-flex;
        margin-top: calc($font-size-small * 0.8);
        color: $font-color-gray;
      }
      .icon {
        width: $font-size-medium;
        height: $font-size-medium;
      }
    }
  }

  .search-bar {
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

  .nav-menu {
    ul {
      padding: 0;
      margin: 0 10px;
      margin-top: 10px;
      li {
        width: 100%;
        list-style: none;
        height: 40px;
        display: inline-flex;
        align-items: center;
        border-radius: 4px;

        &:hover {
          background-color: $menu-hover;
        }
        &::before {
          content: '';
          background-color: $menu-background;
          height: 18px;
          width: 3px;
          border-radius: 4px;
          margin-right: 4px;
        }

        .icon {
          width: $icon-size-medium;
          height: $icon-size-medium;
          margin-right: 10px;
        }

        .todo-num {
          width: 16px;
          text-align: center;
          font-size: $font-size-small;
          margin-right: 10px;
          background-color: $menu-mark;
          padding: calc($font-size-small / 4);
          border-radius: $circular-border;
        }
        .menu-text {
          flex: 1 1 150px;
          font-size: $font-size-large;
        }

        .my-day {
          color: $light-steel-blue;
        }
        .important-todo {
          color: $deep-pink;
        }

        .in-plan {
          color: $dark-cyan;
        }

        .assign-to-me {
          color: $sea-green;
        }

        .task-todo {
          color: $slate-blue;
        }
      }

      .checked {
        background-color: $menu-hover;
        &::before {
          background-color: $royal-blue;
        }
      }
      .delimiter {
        border: none;
        background-color: $menu-line;
        height: 1px;
        width: 95%;
        margin: 5px;
      }

      .todo-group-list {
        padding-left: 30px;
        width: calc(100% - 30px);
      }
    }
  }
}

.footer {
  height: 40px;
  display: flex;
  .new-list {
    padding: 0 10px;
    flex: 1 1 80%;
    display: flex;
    align-items: center;
    border-radius: 4px;
  }
  .new-group {
    padding: 0 10px;
    border-radius: 4px;
  }
  .new-group:hover,
  .new-list:hover {
    background-color: $light-gray;
  }
  .icon {
    width: 25px;
    height: 100%;
  }
}
</style>
