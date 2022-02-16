import { ref } from 'vue'

export interface INavItem {
  type: ItemType
  iconName?: string
  id: string
  title: string
  isChecked: boolean
  todoNum: number
}

export interface INavFolder {
  type: ItemType
  id: string
  title: string
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
    id: '#1',
    type: 'my-day',
    iconName: 'sun',
    title: '我的一天',
    isChecked: true,
    todoNum: 0,
  },
  {
    id: '#2',
    type: 'important-todo',
    iconName: 'star',
    title: '重要',
    isChecked: false,
    todoNum: 0,
  },
  {
    id: '#3',
    type: 'in-plan',
    iconName: 'plan',
    title: '计划内',
    isChecked: false,
    todoNum: 0,
  },
  {
    id: '#4',
    type: 'assign-to-me',
    iconName: 'user',
    title: '已分配给我',
    isChecked: false,
    todoNum: 0,
  },
  {
    id: '#5',
    type: 'task-todo',
    iconName: 'home',
    title: '任务',
    isChecked: false,
    todoNum: 0,
  },
])
