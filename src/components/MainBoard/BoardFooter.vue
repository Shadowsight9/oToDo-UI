<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { ref, reactive, computed, watch, toRef } from 'vue'
import { IMenuProps } from '@/types/IMouseMenu'
import { ITodo, ITodoSubmit } from '@/types/ITodo'
import { useDataStore } from '@/store/dataStore'
import { INavItem, ItemType } from '@/types/INavItem'

const s = useDataStore()

const emit = defineEmits<{
  (event: 'submit', submitTodo: ITodoSubmit): void
}>()

const props = defineProps<{
  currentList: INavItem
}>()
const inputStr = ref('')

const selectListTitle = ref(props.currentList.name)
const selectListID = ref(props.currentList.id)

watch(toRef(props, 'currentList'), (newVal) => {
  selectListID.value = newVal.id
  selectListTitle.value = newVal.name
})

const listArray = computed(() => {
  return s.todoListData.map((item) => ({
    text: item.name,
    id: item.id,
    iconName: 'list',
  }))
})

const listLmbMenu = reactive<IMenuProps>({
  data: listArray.value,
  handler: (index: number, id?: BigInt) => {
    selectListTitle.value = listLmbMenu.data[index].text
    selectListID.value = id || -1n
  },
})

const inputHandler = () => {
  const todo: ITodoSubmit = {
    title: inputStr.value,
    todolistId: selectListID.value,
  }
  emit('submit', todo)
  inputStr.value = ''
}

const pos = ref('top')
</script>
<template>
  <footer class="footer">
    <div class="add-todo">
      <div id="icon" name="check"></div>
      <input
        v-model="inputStr"
        class="add-todo-input"
        type="text"
        @keyup.enter="inputHandler"
      />
      <div v-show="true" class="selector">
        <div v-lmb-menu:[pos]="listLmbMenu" class="list-selector">
          <SvgIcon class="icon" name="list"></SvgIcon>
          <span class="list-text">{{ selectListTitle }}</span>
        </div>
        <div class="calender-selector">
          <SvgIcon class="icon" name="calendar"></SvgIcon>
          <span class="calender-text">{{}}</span>
        </div>
        <div class="loop-selector">
          <SvgIcon class="icon" name="loop"></SvgIcon>
          <span class="loop-text">{{}}</span>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';
.footer {
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: center;
  .add-todo {
    display: flex;
    width: 90%;
    height: 60px;
    border-radius: 4px;
    background-color: rgba($color: $deep-white, $alpha: 0.85);
    align-items: center;
    &:hover {
      background-color: rgba($color: $deep-white, $alpha: 0.9);
    }
    #icon {
      display: unset;
      margin: 0 20px;
      padding: 0;
      width: 24px;
      height: 24px;
      border: 2px solid $slate-gray;
      border-radius: 100%;
    }
    .add-todo-input {
      box-sizing: border-box;
      height: 100%;
      width: 100px;
      flex: 1 1;
      border: 0;
      outline: none;
      font-size: $font-size-xlarge;
      background: transparent;
    }
    div.selector {
      display: flex;
      height: 100%;
      div {
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 5px;
        border-radius: 4px;
        overflow: visible;
        span {
          overflow: hidden;
        }
        .icon {
          border: unset;
          width: $icon-size-large;
          height: $icon-size-large;
          margin: 0;
          color: $medium-transparency;
        }
        &:hover {
          background-color: $deep-white;
        }
      }
    }
  }
}
</style>
