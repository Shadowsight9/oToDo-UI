export interface ITodoItem {
  id: number
  title: string
  isCompleted?: boolean //done
  isImportant?: boolean //importance
  isInMyDay?: boolean //
  deadline?: string //deadline
  isSync?: boolean
  haveAttachment?: boolean
  haveMemo?: boolean
}

export interface ITodoGroup {
  id: number
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
