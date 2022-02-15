export interface INavItem {
  type: ItemType
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
