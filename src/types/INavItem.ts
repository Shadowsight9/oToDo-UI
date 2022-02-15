export interface INavItem {
  type?: ItemType
  id?: string
  title: string
  isChecked: boolean
  todoNum: number
}

export interface INavFolder {
  type?: ItemType
  title: string
  itemArray?: INavItem[]
}

type ItemType =
  | 'my-day'
  | 'important-todo'
  | 'in-plan'
  | 'assign-to-me'
  | 'task-todo'
  | 'todo-list'
