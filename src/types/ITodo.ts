export interface ITodo {
  id: BigInt
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
  userId: BigInt
  todolistId: BigInt
  todoRepeatFromID: BigInt | null
  todoRepeatPlan: ITodoRepeatPlan
  steps: ITodoStep[] | null
}

interface ITodoRepeatPlan {
  id: BigInt
  createdAt: string
  updatedAt: string
  type: string
  interval: number
  before: string | null
  weekday: number
}

interface ITodoStep {
  id: BigInt
  createdAt: string
  updatedAt: string
  name: string
  done: boolean
  doneAt: string
  todoID: BigInt
}

export interface IFixedTodo {
  basicListData: ITodo[]
  dailyListData: ITodo[]
  plannedListData: ITodo[]
  importantListData: ITodo[]
  unnotifiedListData: ITodo[]
}

export interface ITodoSubmit {
  title?: string
  memo?: string
  importance?: boolean
  deadline?: string | null
  notified?: boolean
  notifyAt?: string | null
  done?: boolean
  doneAt?: string | null
  todolistId?: BigInt
  todoRepeatFromID?: BigInt | null
  todoRepeatPlan?: ITodoRepeatPlan
  steps?: ITodoStep[] | null
}
