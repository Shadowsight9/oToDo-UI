export interface INavItem {
  type?: ItemType
  title: string
  isChecked?: boolean
  todoNum?: number
  itemArray?: INavItem[]
}

type ItemType =
  | 'my-day'
  | 'important-todo'
  | 'in-plan'
  | 'assign-to-me'
  | 'task-todo'
  | 'todo-list'
