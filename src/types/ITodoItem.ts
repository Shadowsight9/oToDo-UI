export interface ITodoItem {
  title: string
  isCompleted?: boolean
  isImportant?: boolean
  isInMyDay?: boolean
  belongList?: string
  deadline?: number
  isSync?: boolean
  haveAttachment?: boolean
  haveMemo?: boolean
}

export interface ITodoGroup {
  todoNum: number
  itemArray: ITodoItem[]
}
// 已完成 未完成
export interface ICompletedGroup extends ITodoGroup {
  isCompleted: boolean
}
// 先前 稍后
export interface ITimeGroup extends ITodoGroup {
  isPrevious: boolean
}
// 列表名
export interface IListGroup extends ITodoGroup {
  listName: string
}
