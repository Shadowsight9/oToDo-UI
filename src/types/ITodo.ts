export interface ITodoResponse {
  id: string
  title: string
  content: string
  importance: boolean
  deadline: string
  notified: boolean
  notify_at: string
  done: boolean
  done_at: string
  created_at: string
  updated_at: string
  deleted_at: string
  user_id: string
  todolist_id: string
  files: []
  steps: []
}
