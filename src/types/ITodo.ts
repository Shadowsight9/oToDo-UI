export interface ITodo {
  id: string
  title: string
  content: string
  importance: boolean
  deadline: Date
  notified: boolean
  notifyAt: Date
  done: boolean
  doneAt: Date
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
  userId: string
  todolistId: string
  todoRepeatFromID: string
  todoRepeatPlan: {}
  files: []
  steps: []
}
