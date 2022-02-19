export interface ITodo {
  id: number
  title: string
  memo: string
  importance: boolean
  deadline: string | null
  notified: boolean
  notifyAt: string | null
  done: boolean
  doneAt: string | null
  createdAt: string
  updatedAt: string
  userId: number
  todolistId: number
  todoRepeatFromID: number | null
  todoRepeatPlan: ITodoRepeatPlan
  steps: ITodoStep[] | null
}

interface ITodoRepeatPlan {
  id: number
  createdAt: string
  updatedAt: string
  type: string
  interval: number
  before: string | null
  weekday: number
}

interface ITodoStep {
  id: number
  createdAt: string
  updatedAt: string
  name: string
  done: boolean
  doneAt: string
  todoID: number
}

export interface IFixedTodo {
  basicListData: ITodo[]
  dailyListData: ITodo[]
  plannedListData: ITodo[]
  importantListData: ITodo[]
  unnotifiedListData: ITodo[]
}
