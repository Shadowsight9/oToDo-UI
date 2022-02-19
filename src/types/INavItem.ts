import { ref } from 'vue'

export interface INavItem {
  type: ItemType
  iconName?: string
  id: number
  name: string
  isChecked: boolean
  todoNum: number
}

export interface INavFolder {
  type: ItemType
  id: number
  name: string
  itemArray?: INavItem[]
}

export type ItemType =
  | 'my-day'
  | 'important-todo'
  | 'in-plan'
  | 'assign-to-me'
  | 'task-todo'
  | 'todo-list'
  | 'todo-folder'

export const fixedMenuData = ref<INavItem[]>([
  {
    id: 1,
    type: 'my-day',
    iconName: 'sun',
    name: '我的一天',
    isChecked: true,
    todoNum: 0,
  },
  {
    id: 2,
    type: 'important-todo',
    iconName: 'star',
    name: '重要',
    isChecked: false,
    todoNum: 0,
  },
  {
    id: 3,
    type: 'in-plan',
    iconName: 'plan',
    name: '计划内',
    isChecked: false,
    todoNum: 0,
  },
  {
    id: 4,
    type: 'assign-to-me',
    iconName: 'user',
    name: '已分配给我',
    isChecked: false,
    todoNum: 0,
  },
  {
    id: 5,
    type: 'task-todo',
    iconName: 'home',
    name: '任务',
    isChecked: false,
    todoNum: 0,
  },
])
