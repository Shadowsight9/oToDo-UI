import { ref } from 'vue'

export interface INavItemDTO {
  id: number
  name: string
  isLeaf: boolean
  count: number
  children?: INavItem[]
}

export interface INavItem extends INavItemDTO {
  // VO
  type: ItemType
  iconName?: string
  isChecked: boolean
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
    name: '我的一天',
    isLeaf: true,
    count: 0,
    type: 'my-day',
    iconName: 'sun',
    isChecked: true,
  },
  {
    id: 2,
    name: '重要',
    isLeaf: true,
    count: 0,
    type: 'important-todo',
    iconName: 'star',
    isChecked: false,
  },
  {
    id: 3,
    name: '计划内',
    isLeaf: true,
    count: 0,
    type: 'in-plan',
    iconName: 'plan',
    isChecked: false,
  },
  {
    id: 4,
    name: '已分配给我',
    isLeaf: true,
    count: 0,
    type: 'assign-to-me',
    iconName: 'user',
    isChecked: false,
  },
  {
    id: 5,
    name: '任务',
    isLeaf: true,
    count: 0,
    type: 'task-todo',
    iconName: 'home',
    isChecked: false,
  },
])

export function dto2vo(dtoData: INavItemDTO[]) {
  const voList: INavItem[] = []
  dtoData.forEach((item) => {
    const type: ItemType = item.children ? 'todo-folder' : 'todo-list'
    const voItem: INavItem = { ...item, type, isChecked: false }
    voList.push(voItem)
  })
  return voList
}
